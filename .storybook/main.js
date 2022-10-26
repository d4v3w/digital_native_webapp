module.exports = {
  "stories": ["../stories/*.@(js|jsx|ts|tsx|mdx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-postcss"],
  core: {},
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};