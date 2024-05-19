<p align="center">
  <a href="https://devlaunchers.org/">
    <img alt="Devlaunchers Logo" src="https://master--632ca21aeea1618b7fa0bf48.chromatic.com/android-chrome-512x512.png" width="60" />
  </a>
</p>

<h1 align="center">
  Devlaunchers Design System
</h1>

Components, styles, and utilities are the core of the Devlaunchers brand shared across its websites. They're most notably used on [devlaunchers.org](https://devlaunchers.org) but are also found on our internal websites and tools.

This storybook represents components found in the Devlaunchers monorepo, specifically the [@devlaunchers/components](https://github.com/dev-launchers/dev-launchers-platform/tree/master/packages/UI) package and derived from the amazing work of the universal design team's [figma file](https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System).

Its organization roughly aligns with variations of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).

## 🚀 Quick start

1.  **Install the dependencies.**

    ```shell
    yarn
    ```

1.  **Spin up a development server.**

    In order to see how to use a certain component you have to start a local development server of storybook.

    ```shell
    yarn workspace @devlaunchers/components storybook
    ```

1.  **Start using components!**

    Open http://localhost:6006 in your browser (should happen automatically) and start reading the documentation from within storybook.

## Contribute

If you encounter an issue with the components found in this system, we encourage you to open an issue with the Platform Enablement label or simply click [here](https://github.com/dev-launchers/dev-launchers-platform/issues/new?label=%22Platform%20Enablement%22).
