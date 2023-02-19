 # Dev Launchers Strapi Service

# Getting Started
1. Copy the `.env.example` file into `.env`
2. Run `npm install`
3. Run `npm run develop`
4. Go to http://localhost:1337/admin to create an account

# Contributing
Follow the [contributing guide](./CONTRIBUTING.md)

# Release
We are using semantic versioning to tag release. Follow https://github.com/semantic-release/semantic-release#commit-message-format
to format the commit messages.

Once you are ready to create a new release, create a PR to merge main branch to release branch.

# Update Strapi Version
Go to https://github.com/strapi/strapi/releases to find the latest version, then update all `@strapi` packages in
`package.json` to this version and run `npm install`.

# Integration Test
To run the integration test envrionment, set `NODE_ENV=test` in `.env` file. The login email is `integration-test@devlaunchers.org`
password is `wQ46^BEsVbf9VD&D3ddSPCUP`. Data is stored in `integration-test/data.db`.