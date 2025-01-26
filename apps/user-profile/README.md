# Dev Launchers (https://devlaunchers.org)

## We Build People (and software)

This is the monorepo for all DevLaunchers internal products, we use React.js/Next.js and many other wonderful libraries.

---

## About Dev Launchers

Dev Launchers is a nonprofit tech company working to democratize access to technology and tech related skills. At our core, we build projects and run programs that are designed to prepare the world for a rapidly changing future. We've built an inclusive, software focused incubator giving people from diverse backgrounds the skills and resources necessary to succeed in careers touched by technology, and have an open community focused on advancing technology, one another, and ourselves. This repository holds the beginnings of the online platform we're creating in order to first impart the general skills required for members to begin their own projects, and then support their exploration as they tackle building something they're excited about. It also functions as our organization's website!

---

## Contributing

Visit https://devlaunchers.org/join to join one of our teams!

---

## Get Started

1. Clone the repo

2. Install dependencies: `yarn install`

3. Run the tailwindcss compiler: `yarn workspace @devlaunchers/tailwind dev`

4. Run the app's development server: `yarn workspace @devlaunchers/app dev`

---

## Commit & Release

We are using semantic versioning to tag release. Follow https://github.com/semantic-release/semantic-release#commit-message-format
to format the commit messages.

We've created a command to guide you create conventional commit message all you need to do is run `yarn commit`

The release cadence is every 4 weeks. We will create a PR to merge the master branch into the release branch.

---

## Maintaining deps updated

The global commands `yarn deps:check` and `yarn deps:update` will help to maintain the same versions across the entire monorepo.
They are based on the excellent [npm-check-updates](https://github.com/raineorshine/npm-check-updates)
(see [options](https://github.com/raineorshine/npm-check-updates#options), i.e: `yarn check:deps -t minor`).

> After running `yarn deps:update`, a `yarn install` is required. To prevent
> having duplicates in the yarn.lock, you can run `yarn dedupe --check` and `yarn dedupe` to
> apply deduplication. The duplicate check is enforced in the example github actions.

---

## UI/UX Testing

> Available at: https://staging.devlaunchers.org
> This runs the main development branch (`master`) and is automatically redeployed when that branch is updated

---

## Licenses

The Dev Launchers platform is licensed under [GNU General Public License v3](./LICENSE.md).
