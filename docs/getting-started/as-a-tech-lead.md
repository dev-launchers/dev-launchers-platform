## Getting started as a technical lead

1. Clone the repo

2. Install: `yarn`

3. Run dev version: `yarn workspace @devlaunchers/app dev`

# How to contribute to the DevLaunchers website

## Requirements:

Before you start contributing, you're going to need a few things:

- **Code Editor:**

  - [Visual Studio Code](https://code.visualstudio.com/) **VS Code is recommended due to the extensions provided**

- **Package Manager:**

  - [Yarn](https://classic.yarnpkg.com/en/docs/install) **Yarn has to be used when installing new dependencies**

- **Communication:**
  - While it may be obvious, you're going to need a GitHub account.
  - You're also going to need a Discord account, so you can:
    - Communicate effectively with other contributors
    - Test the changes you've made to the website
    - Receive help as you need it
  - Message `Enjoy2Live#5094`

## Standards

### **To create app that connects to [DevLaunchers website](https://devlaunchers.org/):**

1. Navigate to the apps directory

```
cd apps
```

2. Initiate an empty next.js project using yarn

```
yarn create next-app [name of app]
```

then navigate to its `package.json` file and change the attribute `name` from `"name": "[name of app]"` to `"name":"@devlaunchers/[name of app]"`

3. Add your app as a dependency to devlaunchers website app (with the same exact name you provided in step 2)

```
yarn workspace @devlaunchers/app add @devlaunchers/[name of app]@0.1.0
```

4. Let `@devlaunchers/app` app transpile pages coming from your app by going to `next.config.js` inside apps/platform\_\_website folder (use the same exact name you provided in step 2)

```
const withTM = require("next-transpile-modules")([...,"@devlaunchers/[name of app]"]); // pass the modules you would like to see transpiled
```

5. Create a page inside your project directory's pages folder i.e `apps/@devlaunchers/[name of app]/pages/sample.js` and defaultly export a react component out from it

```
export default function Sample() {
  return (
    <div>
      Sample Page
    </div>
  )
}
```

6. Wire the page you just created by replicating the same file hierarchy from YOUR app `pages` folder into the `pages` folder of @devlaunchers/app app nested inside a folder serving as a base-path of your project example:

<ins>**your app pages folder hierarchy**</ins>

```
./apps/[name of app]/pages
├── _app.js
└── sample.js
```

<ins>**@devlaunchers/app app pages folder hierarchy**</ins>

```
./apps/app/src/pages
...
├── page-from-platform.js
└── [Your preferred base-path]
│    └── sample.js
├── page-from-platform.js
...
```

7. Inside your new empty `./apps/app/src/pages/[Your preferred base path]/sample.js` file add the three following lines (use the same exact name you provided in step 2)

```
export { default } from "@devlaunchers/[name of app]/pages/sample"
export { getStaticProps } from "@devlaunchers/[name of app]/pages/sample" // optional if you export getStaticProps from your page
export { getStaticPaths } from "@devlaunchers/[name of app]/pages/sample" // optional if you export getStaticPaths from your page
```

Note: you can ignore getStaticProps and getStaticPaths if your page doesn't export them.

8. Now the platform website has access to your page and you can view it in dev server running the following command

```
yarn workspace @devlaunchers/app dev
```

then navigate to http://localhost:3000/[Your-preferred-base-path-from-step-6]/sample

9. To create a new page you need to do the steps from 5 to 8 again considering that 1 to 4 are done once you create a new project only.

### Code Style

To prevent formatting wars and be consistent, here are the coding style guidelines we have made:

- Use 2 space indentation (2 space tabs are fine too)
- Remove **all** unused variables, and make sure you do before every commit
  - This helps make sure the code runs as smooth as possible, as JavaScripts garbage collector has to do **much** less work.
- Remove **console.log()** from files before commiting
- Remove **all** unnecessary comments prior to commiting
  - Example:
  ```js
  // This needs to be changed, I don't like the font!
  ```
- Make sure to annotate your code with [JSDoc comments](https://jsdoc.app/about-getting-started.html#adding-documentation-comments-to-your-code)
  The comment above would need to be removed after the issue was resolved
  - This helps _all_ developers understand what your code does
  - **BONUS:** VSCode use JSDoc comments for its autocomplete and inline function header
- Use double quotes (`" "`) for strings
- Always use ES6's Template Literals for string interpolation, and **never** concatenate strings.

  - Example:

    ```js
    // Very Bad:
    console.log(user + " has " + xp + " xp.");

    // Good:
    console.log(`${user} has ${xp} xp.`);
    ```

- End statements and expressions with semicolons (`;`).
- Use camelCase when naming variables
- Capatalize the first letter of every custom-made component
- The name of the file should match the component name.
  - Example: filename is Hello.js
    ```js
      const Hello = (props) => {
          return ...
      }
    ```
- Every component should have its styles seperated in another file that is convieniently named Styled[**Name of Component**].js
  - This should be placed in the same folder as the component file
  - This helps to reduce or completely avoid in-line styling
- Use theme variables located at the apps/platform\_\_website/src/styles/theme.js
  [See how to use theme variables here](https://styled-components.com/docs/advanced#theming)

### Commits, Branches, and Pull Requests

- Before starting anything, make sure you:
  - ```bash
    git checkout master
    git pull
    git checkout -b "branch-name"
    ```
  - This ensures that you are working on the newest copy of the app.
- Make sure your commit messages are descriptive, and in the present tense (per convention)

  - Example (using active voice)

  ```
    // Very Bad:
    I created a card component and added the rainbow as well as updated the image size

    // Good:
    Create card component
      - add rainbow bar
      - update image size
  ```

  - Your commit message should look like a list of instructions

- Create a new branch for each new feature you add.
- You can create a pull request (commonly referred to as "PR")by clicking a little notice when you visit the repository that includes "merge changes"
- When creating a PR:
  - List all the new packages you've installed, and the purpose of each package
  - Give a summary of all the changes you've made
  - Give a summary of all the commands you've added
  - Explain the purpose for any new structures you've created
  - An example (my first PR!) is at [#101](https://github.com/dev-launchers-sandbox/project__discord-bot/pull/101)
  - The destination branch should be **in-progress**
- During a PR:
  - You may be asked questions about what certain things do
  - You may be asked to refactor/change your code because:
    - It doesn't comply with the standards we've set forth
    - It would be wise to add a new feature
    - Or, something is missing or confusing

## Release

We are using semantic versioning to tag release. Follow the [Format Guide](https://github.com/semantic-release/semantic-release#commit-message-format)
to format the commit messages.
