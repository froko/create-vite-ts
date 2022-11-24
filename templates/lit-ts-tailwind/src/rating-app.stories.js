import { html } from 'lit';

import './rating-app';

export default {
  title: 'Rating App'
};

const defaultArgs = {
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
};

const Template = (args) => html`<rating-app .products=${args.products}></rating-app>`;

export const Default = Template.bind({});
Default.args = defaultArgs;
