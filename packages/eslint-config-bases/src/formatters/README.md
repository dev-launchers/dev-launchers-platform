## What

Custom eslint formatters let you display linting results in a format that best fits your needs, whether that’s in a specific file format, a certain display style, or a format optimized for a particular tool.
Read more in the [eslint docs](https://eslint.org/docs/latest/extend/custom-formatters)

## Current formatters

Here's a list of the current formatters and how to use them

| Name           | Description                                                                        | Usage                                                                                                                                       |
| -------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `formatByRule` | Writes a markdown file to the root of the linted workspace with the specified rule | `filterByRule="<nameOfRule>" fileName="[name_of_the_md_file.md]" npx eslint -f packages/eslint-config-bases/src/formatters/formatByRule.js` |
