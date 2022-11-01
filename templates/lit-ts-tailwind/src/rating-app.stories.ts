import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './rating-app';

export default {
  title: 'Rating App',
  render: (args) => html`<rating-app .products=${args.products}></rating-app>`
} as Meta;

export const Default: StoryObj = {
  args: {
    products: [
      {
        id: 'vite',
        title: 'Vite',
        url: 'https://vitejs.dev/',
        description: 'Next Generation Frontend Tooling',
        rating: 3
      },
      {
        id: 'storybook',
        title: 'Storybook',
        url: 'https://storybook.js.org/',
        description: 'Build component driven UIs faster',
        rating: 3
      }
    ]
  }
};
