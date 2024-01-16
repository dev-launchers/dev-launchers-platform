# Getting started with the Platform Enablement Team

dev-launchers-platform is a mono repo using yarn. All yarn script lines need to be run in the root folder. 

## Installing and getting started
1. install yarn @  https://classic.yarnpkg.com/en/docs/install#windows-stable
2. clone the repo @  https://github.com/dev-launchers/dev-launchers-platform
3. After cloning repo, navigate to /dev-launchers-platform
4. "$ yarn install " in the root folder to install dependencies 
5. "$ yarn workspace @devlaunchers/tailwind dev & yarn workspace @devlaunchers/components storybook " to run both tailwind dev and storybook.
7. Start Development work.

## Yarn scripts.

To run scripts in a mono repo, you will need to target a workspace with the following CLI.

    $ yarn workspace @devlaunchers/<workspace> <cmd>

workspace - components

cmd - add, init, install, remove

Below is the command to run the dev script in the devlaunchers/components workspace.

    $ yarn workspace @devlaunchers/components dev

This is an script to yarn install in a speific workspace. 

    $ yarn workspace @devlaunchers/components install

Yarn documentation : https://classic.yarnpkg.com/en/docs


### Installing packages

To install an package into a spefic workspace:

    $ yarn workspace @devlaunchers/<workspace> add <library>

#### Installing Radix-ui components

Radix-ui components need to be installed indiviually, if you are not able to import @radix-ui follow the command below to install in devlaunchers components workspace.

    $ yarn workspace @devlaunchers/components add <library>

Below is the command to install radix-ui/react-checkbox

    $ yarn workspace @devlaunchers/components add @radix-ui/react-checkbox


## Git branch checkout flow

We will be working out of development/components. 

    $ git checkout development/components

- after switching to the development/components branch, make sure you "yarn install" for new dependencies

### Out of "development/components" branch all new branches will be created off of it.

    $ git checkout -b components/newBranchName


## Figma

Go to universal Figma @:

    https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&t=w1PSPgQunxcd19Bz-6

- All component designs will be coming from the universal UI library.
- Make sure dev mode is toggled in Figma.
- All tailwind classes will be made up of dashes, other characters like '/' will be replaced with '-'.

### Figma plugins

#### AutoHTML

Turn components into code with this extension. This can assist with slots, elements and tailwind classes as a beginning point. 
```    
1. Select the component.
2. Select thte Plugins tab on the top left
3. Select AutoHTML
    - Install if you do not see this plugin.
    - Settings are: HTML Framework with Tailwind styling. 
4. Select the <> Code tab
5. Copy over the classes into React.
```

## Creating components

When creating the folder/files in src/components :

- Project Components folder should match Figma design location 
    - Example "src/components/Checkbox"
- Project Components names should match the design Name - "Capitalized"
    - Example "src/components/Checkbox/Checkbox.tsx"
- Project components need a #.stories.tsx to work with storybook.
  - find a template or copy from another stories.tsx


## Storybook & tailwind dev environment. 

In a terminal, in order to run tailwind dev, you will want to run the following command.

    $ yarn workspace @devlaunchers/tailwind dev

Storybook will be the primary way you will see your design changes. Running "components storybook" this is open up a browser for storybook. This is where you can see changes that are made. By running the command below, a window should open with storybook running.

    $ yarn workspace @devlaunchers/components storybook

To run both commands at once :

    $ yarn workspace @devlaunchers/tailwind dev & yarn workspace @devlaunchers/components storybook

## Submit the branch with a new pull request.

In git bash, you will want to do the git push flow.

  - git add .
  - Git commit -m "describes what you worked on"
  - git push

Go to github.com and make sure you are logged in and in the right repo.
https://github.com/dev-launchers/dev-launchers-platform

  - Go to "Pull Requests" tab.
  - Create new "Pull request"
  - the base branch is "development/components"
  - the compare branch is your new branch
  - Rest on technical lead to merge or give feedback.
