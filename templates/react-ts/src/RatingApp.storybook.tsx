import { ComponentStory, ComponentMeta } from '@storybook/react';

import RatingApp from './RatingApp';

export default {
  title: 'Rating App',
  component: RatingApp
} as ComponentMeta<typeof RatingApp>;

const Template: ComponentStory<typeof RatingApp> = (args) => <RatingApp {...args} />;

export const Default = Template.bind({});
Default.args = {
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
