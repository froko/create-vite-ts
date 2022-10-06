module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: <% if (lit) { %>'@storybook/web-components'<% } else if (react) { %>'@storybook/react'<% } %>,
  core: {
    builder: '@storybook/builder-vite'
  },
  async viteFinal(config) {
    config.plugins = [...config.plugins];
    return config;
  }
};
