# Dev Launchers (https://devlaunchers.org)

## We Build People (and software)

This is the monorepo for all DevLaunchers internal products, we use React.js/Next.js and many other wonderful libraries.

---

## About Dev Launchers

Dev Launchers is a nonprofit tech company working to democratize access to technology and tech related skills. At our core, we build projects and run programs that are designed to prepare the world for a rapidly changing future. We've built an inclusive, software focused incubator giving people from diverse backgrounds the skills and resources necessary to succeed in careers touched by technology, and have an open community focused on advancing technology, one another, and ourselves. This repository holds the beginnings of the online platform we're creating in order to first impart the general skills required for members to begin their own projects, and then support their exploration as they tackle building something they're excited about. It also functions as our organization's website!

---

## Contributing

Visit https://devlaunchers.org/projects to join one of our teams!

---

## Get Started

1. Clone the repo

2. Install: `yarn`

3. Run dev version: `yarn workspace @devlaunchers/app dev`

---


## Monorepo scripts

Some convenience scripts can be run in any folder of this repo and will call their counterparts defined in packages and apps.

| Name                         | Description                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `yarn g:changeset`           | Add a changeset to declare a new version                                                                                             |
| `yarn nuke:node_modules`     | Remove `node_modules` folder in sub-folders                                                                                          |
| `yarn commit`                | Format your commit message to follow our convention (Run `git add -p` first)                                                         |
| `yarn g:typecheck`           | Run typechecks in all workspaces                                                                                                     |
| `yarn g:lint`                | Display linter issues in all workspaces                                                                                              |
| `yarn g:lint --fix`          | Attempt to run linter auto-fix in all workspaces                                                                                     |
| `yarn g:build`               | Run build in all workspaces                                                                                                          |
| `yarn g:clean`               | Clean builds in all workspaces                                                                                                       |
| `yarn g:check-dist`          | Ensure build dist files passes es2017 (run `g:build` first). [WIP]                                                                   |
| `yarn g:check-size`          | Ensure browser dist files are within size limit (run `g:build` first). [WIP]                                                         |
| `yarn clean:global-cache`    | Clean tooling caches (eslint, jest...)                                                                                               |
| `yarn deps:check --dep dev`  | Will print what packages can be upgraded globally (see also [.ncurc.yml](https://github.com/sortlist/packages/blob/main/.ncurc.yml)) |
| `yarn deps:update --dep dev` | Apply possible updates (run `yarn install && yarn dedupe` after)                                                                     |
| `yarn check:install`         | Verify if there's no peer-deps missing in packages                                                                                   |
| `yarn dedupe`                | Built-in yarn deduplication of the lock file                                                                                         |

> Why using `:` to prefix scripts names ? It's convenient in yarn 3+, we can call those scripts from any folder in the monorepo.
> `g:` is a shortcut for `global:`. See the complete list in [root package.json](./package.json).

## Maintaining deps updated

The global commands `yarn deps:check` and `yarn deps:update` will help to maintain the same versions across the entire monorepo.
They are based on the excellent [npm-check-updates](https://github.com/raineorshine/npm-check-updates)
(see [options](https://github.com/raineorshine/npm-check-updates#options), i.e: `yarn check:deps -t minor`).

> After running `yarn deps:update`, a `yarn install` is required. To prevent
> having duplicates in the yarn.lock, you can run `yarn dedupe --check` and `yarn dedupe` to
> apply deduplication. The duplicate check is enforced in the example github actions.

## Release

We are using semantic versioning to tag release. Follow https://github.com/semantic-release/semantic-release#commit-message-format
to format the commit messages.

We've created a command to guide you create conventional commit message all you need to do is run `yarn commit`

Once you are ready to create a new release, create a PR to merge master branch to release branch.

.

---

## Licenses

The Dev Launchers platform is licensed under [GNU General Public License v3](./LICENSE.md)
