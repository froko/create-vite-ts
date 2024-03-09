import type { Story } from '@ladle/react';

import RatingApp, { RatingAppProps } from './RatingApp';

export default {
  title: 'Rating App'
};

export const Default: Story<RatingAppProps> = (args) => <RatingApp {...args} />;
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
      id: 'ladle',
      title: 'Ladle',
      url: 'https://ladle.dev/',
      description: 'Develop and test your React stories faster',
      rating: 3
    }
  ]
};
