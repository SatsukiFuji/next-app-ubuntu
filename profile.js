/*** ディレクトリ構成 ***/ 

const { Description } = require("@storybook/blocks")
const path = require("path")

module.exports = (
  plop
) => {
  plop.setGenerator('component', {
    Description: 'React Component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Select component type',
        choices: [
          {
            name: "UI Elements",
            value: "ui-elements",
          },
          {
            name: "UI Parts",
            value: "ui-parts",
          },
          {
            name: "Layout",
            value: "layout",
          },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{type}}/{{name}}/index.tsx',
        templateFile: 'plop-templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}/{{name}}/{{name}}.stories.tsx',
        templateFile: 'plop-templates/component/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}/{{name}}/{{name}}.test.tsx',
        templateFile: 'plop-templates/component/Component.test.tsx.hbs',
      },
    ],
  })
}