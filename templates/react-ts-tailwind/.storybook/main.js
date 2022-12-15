module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  features: {
    interactionsDebugger: true
  },
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...config.define,
        global: 'window'
      },
      esbuild: {
        ...config.esbuild,
        jsxInject: `import React from 'react'`
      }
    };
  }
};
