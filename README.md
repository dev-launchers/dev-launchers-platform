 # Dev Launchers Strapi Service

# Contributing
Follow the [contributing guide](./CONTRIBUTING.md)

# Release
We are using semantic versioning to tag release. Follow https://github.com/semantic-release/semantic-release#commit-message-format
to format the commit messages.

Once you are ready to create a new release, create a PR to merge main branch to release branch.

# Update Strapi Version
Go to https://github.com/strapi/strapi/releases to find the latest version, then update all `@strapi` packages in
`package.json` to this version and run `npm install`.