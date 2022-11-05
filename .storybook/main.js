module.exports = {
  "stories": ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-postcss"],
  core: {},
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};