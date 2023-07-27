#syntax=docker/dockerfile:1.2
FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
WORKDIR /srv/app
COPY ./favicon.ico ./
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY config ./config
COPY public ./public
COPY src ./src
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "start"]
