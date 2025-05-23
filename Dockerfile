#
# EXAMPLE OF MULTISTAGE BUILD FOR MONOREPOS
#
# @link https://github.com/belgattitude/nextjs-monorepo-example
#

###################################################################
# Stage 1: Install all workspaces (dev)dependencies               #
#          and generates node_modules folder(s)                   #
# ----------------------------------------------------------------#
# Notes:                                                          #
#   1. this stage relies on buildkit features                     #
#   2. depend on .dockerignore, you must at least                 #
#      ignore: all **/node_modules folders and .yarn/cache        #
###################################################################

ARG NODE_VERSION=16
ARG ALPINE_VERSION=3.15

FROM node:14.19.3-bullseye AS deps
# RUN apk add --no-cache rsync
RUN apt update && apt install -y rsync
WORKDIR /workspace-install


COPY yarn.lock .yarnrc.yml ./
COPY .yarn/ ./.yarn/

# Specific to monerepo's as docker COPY command is pretty limited
# we use buidkit to prepare all files that are necessary for install
# and that will be used to invalidate docker cache.
#
# Files are copied with rsync:
#
#   - All package.json present in the host (root, apps/*, packages/*)
#   - All schema.prisma (cause prisma will generate a schema on postinstall)
#
RUN --mount=type=bind,target=/docker-context \
    rsync -amv --delete \
          --exclude='node_modules' \
          --exclude='*/node_modules' \
          --include='package.json' \
          --include='schema.prisma' \
          --include='*/' --exclude='*' \
          /docker-context/ /workspace-install/;

# @see https://www.prisma.io/docs/reference/api-reference/environment-variables-reference#cli-binary-targets
ENV PRISMA_CLI_BINARY_TARGETS=linux-musl

#
# To speed up installations, we override the default yarn cache folder
# and mount it as a buildkit cache mount (builkit will rotate it if needed)
# This strategy allows to exclude the yarn cache in subsequent docker
# layers (size benefit) and reduce packages fetches.
#
# PS:
#  1. Cache mounts can be used in CI (github actions)
#  2. To manually clear the cache
#     > docker builder prune --filter type=exec.cachemount
#
# Does not play well with buildkit on CI
# https://github.com/moby/buildkit/issues/1673

# Make sure the env is set to be CI
ENV CI=true

RUN --mount=type=cache,target=/root/.yarn3-cache,id=yarn3-cache \
    YARN_CACHE_FOLDER=/root/.yarn3-cache \
    yarn install --immutable --inline-builds


###################################################################
# Stage 2: Build the app                                          #
###################################################################

FROM node:14.19.3-bullseye AS builder
ARG NODE_ENV=production
ENV NEXTJS_IGNORE_ESLINT=1
ENV NEXTJS_IGNORE_TYPECHECK=0
# Make sure the env is set to be CI
ENV CI=true

WORKDIR /app

COPY . .
COPY --from=deps /workspace-install ./

# This will do the trick, use the corresponding env file for each environment.
RUN if [ "${NODE_ENV}" = "staging" ]; then mv ./apps/app/.env.staging ./apps/app/.env.production ; fi

# # Optional: if the app depends on global /static shared assets like images, locales...
RUN yarn workspace @devlaunchers/tailwind build-tw
RUN yarn workspace @devlaunchers/app build

# Does not play well with buildkit on CI
# https://github.com/moby/buildkit/issues/1673
RUN --mount=type=cache,target=/root/.yarn3-cache,id=yarn3-cache \
    SKIP_POSTINSTALL=1 \
    YARN_CACHE_FOLDER=/root/.yarn3-cache \
    yarn workspaces focus @devlaunchers/app --production

###################################################################
# Stage 3: Extract a minimal image from the build                 #
###################################################################

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/app/next.config.js \
                    /app/apps/app/package.json \
                    ./apps/app/
COPY --from=builder /app/apps/website/next.config.js \
                    /app/apps/website/package.json \
                    ./apps/website/
COPY --from=builder /app/apps/ideaspace/next.config.js \
                    /app/apps/ideaspace/package.json \
                    ./apps/ideaspace/
COPY --from=builder /app/apps/user-profile/next.config.js \
                    /app/apps/user-profile/package.json \
                    ./apps/user-profile/
COPY --from=builder /app/apps/site-projects/next.config.js \
                    /app/apps/site-projects/package.json \
                    ./apps/site-projects/
COPY --from=builder /app/apps/dev-recruiters/next.config.js \
                    /app/apps/dev-recruiters/package.json \
                    ./apps/dev-recruiters/
COPY --from=builder /app/apps/gptbot/next.config.js \
                    /app/apps/gptbot/package.json \
                    ./apps/gptbot/
COPY --from=builder /app/apps/app/public ./apps/app/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/app/.next ./apps/app/.next
COPY --from=builder --chown=nextjs:nodejs /app/apps/app/.env.production ./apps/app/.env.production
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE ${NEXTJS_APP_PORT:-3000}

ENV NEXT_TELEMETRY_DISABLED=1


CMD ["./node_modules/.bin/next", "start", "apps/app/", "-p", "3000"]
