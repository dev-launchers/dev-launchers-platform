# How to Contribute to the DevLaunchers website

## Requirements:
Before you start contributing, you're going to need a few things:
- **Code Editor:**
    - Either [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com/) **VS Code is recommended due to the extensions provided**
    - Why? These are code editors that are 100% guaranteed to support the extensions we use.
- **Communication:**
    - While it may be obvious, you're going to need a GitHub account.
    - You're also going to need a Discord account, so you can:
        - Communicate effectively with other contributors
        - Test the changes you've made to the website
        - Receive help as you need it
    - Message `Nathan D.#8643` or `Enjoy2Live#0001`

# Standards

## Code Style
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
    - This helps *all* developers understand what your code does
    - **BONUS:** Atom and VSCode both use JSDoc comments for their autocomplete and inline function header
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
- Use theme variables located at the /src/styles/theme.js
    [See how to use theme variables here](https://styled-components.com/docs/advanced#theming)

## Commits, Branches, and Pull Requests
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
