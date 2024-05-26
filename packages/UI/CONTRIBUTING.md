# Getting started with the Platform Enablement Team

dev-launchers-platform is a mono repo using yarn. All yarn script lines need to be run in the root folder.

## 🔎 What's inside?

A quick look at the top-level files and directories included in this package.

    .
    ├── node_modules
    ├── public
    ├── src
    ├── .gitignore
    ├── .env
    ├── LICENSE
    ├── package.json
    ├── CONTRIBUTING.md
    └── README.md

1.  **`node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages).

2.  **`public`**: This directory will contain static files that can be accessed directly via the browser using a path relative to storybook base URL.

3.  **`src`**: This directory will contain all of the code related to what you will see on your application.

4.  **`.env`**: This file will contain the necessary environment variables for your application.

5.  **`.gitignore`**: This file tells git which files it should not track or maintain during the development process of your project.

6.  **`LICENSE`**: The template is licensed under the MIT licence.

7.  **`package.json`**: Standard manifest file for Node.js projects, which typically includes project specific metadata (such as the project's name, the author among other information). It's based on this file that npm will know which packages are necessary to the project.

8.  **`README.md`**: A text file containing useful reference information about the project.

9.  **`CONTRIBUTING.md`**: A markdown file containing useful guides for contributing to the design system effectively.

## Contribute

If you encounter an issue with the components found in this system, we encourage you to open an issue with the Platform Enablement label or simply click [here](https://github.com/dev-launchers/dev-launchers-platform/issues/new?label=%22Platform%20Enablement%22).

## Learning Storybook

1. Read the offical introductory tutorial over at [Storybook tutorials](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/).
2. Learn how to transform your component libraries into design systems in our [Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/) tutorial.
3. See official documentation for [Storybook](https://storybook.js.org/).

## Installing and quick started

1. install yarn, below are several ways to install.

   - In a terminal with admin run `$ corepack enable`

2. clone the repo @ https://github.com/dev-launchers/dev-launchers-platform
3. After cloning repo, navigate to /dev-launchers-platform
4. `$ yarn install` in the root folder to install dependencies
5. Open a new terminal and run `$ yarn workspace @devlaunchers/tailwind dev`. to start tailwind constructor.
6. Open a 2nd terminal and run `$ yarn workspace @devlaunchers/components storybook` to start storybook.
7. Start Development work.

### Installing packages

To install a package to the design system:

    $ yarn workspace @devlaunchers/<workspace> add <library>

#### Installing Radix-ui components

> Radix UI is an open-source UI component library for building high-quality, accessible design systems and web apps.
> Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience.

We use these low level UI components as the base layer of our design system, so when you get to build a component from our [figma style guide file](https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System) make sure to use radix ui whenever possible!

Below is the command to install radix-ui/react-checkbox for example

    $ yarn workspace @devlaunchers/components add @radix-ui/react-checkbox

# Boards and issues.

### Issues in github

When looking at issues in github, you will want to filter by Platform Enablement.

https://github.com/dev-launchers/dev-launchers-platform/issues?q=is%3Aopen+is%3Aissue+label%3A%22Platform+Enablement%22

### Zenhub

Platform Enablement Team uses zenhub as it's board. If this link does not work contact enjoy2live on discord to invite you to the team.

https://app.zenhub.com/workspaces/platform-enablement-63529f02029ee50018fe58c6/board

## Git branch checkout flow

We will be working out of development/components.

    $ git checkout development/components

- after switching to the development/components branch, make sure you "yarn install" for new dependencies

### Out of "development/components" branch all new branches will be created off of it.

    $ git checkout -b components/newBranchName

## Figma

Go to universal Figma @:

    https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System

- All component designs will be coming from the universal UI library.
- Make sure dev mode is toggled in Figma.
- All tailwind classes will be made up of dashes, other characters like '/' will be replaced with '-'.

## Vscode extensions

`extensions.json` in this workspace will recommend the follow extensions when you first open the workspace:

1. Tailwind css intellisense
2. Eslint
3. ES7 + React/redux/React-native snippets.
4. Figma for vs code

### Storybook snippet

By typing "story" in an empty file, you can get the below snippet as a starter for storybook files. When thes snippet is imported it will have selected all the parts needs to type in your Component.

```jsx
import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Component";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;
type Story = StoryObj<typeof Component>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Component />,
};
```

## Storybook & tailwind dev environment.

In a terminal, in order to get tailwind classes in your project you will need to run the dev command.

    $ yarn workspace @devlaunchers/tailwind dev

Storybook will be the primary way you will see your design changes. Running "components storybook" this is open up a browser for storybook. This is where you can see changes that are made. By running the command below, a window should open with storybook running.

    $ yarn workspace @devlaunchers/components storybook

## Creating new components in project.

When creating the folder/files in src/components :

- The Project Components folder should match the Figma design location
  - Example "src/components/Checkbox"
- Project Components names should match the design Name - "Capitalized"
  - Example "src/components/Checkbox/Checkbox.tsx"
- Project components need a #.stories.tsx to work with storybook.
  - find a template or copy from another stories.tsx
- Create an index.ts file for exporting the tsx files.
  ```
  export { default as Alert } from './Alert';
  export type {AlertProp} from './Alert'
  ```

## Jsdocs auto intergration with storybook.

Try to always add jsdocs description to each prop of your component type defination, this will allow developers to know how use the component props right within their code editor and storybook will also be able to pick it up and auto document the component you built for you.

<div style="float: none;clear: both;width: 100%;position:relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">
<iframe style="position: absolute;top: 0;left: 0;width:100%;height: 100%;" width="480" height="270" src="https://www.youtube.com/embed/BLUmt0j7OLY" title="INSTANT documentation with Storybook 7 AUTODOCS | Quick Tips" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Submit the branch with a new pull request.

In git bash, you will want to do the git push flow.

- git add .
- git commit -m "describes what you worked on"
- git push origin branch

Go to github.com and make sure you are logged in and in the right repo.
https://github.com/dev-launchers/dev-launchers-platform

- Go to "Pull Requests" tab.
- Create new "Pull request"
- the base branch is "development/components"
- the compare branch is your new branch
- Rest on technical lead to merge or give feedback.
