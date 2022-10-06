import { ComponentStory, ComponentMeta } from '@storybook/react';

import RatingContainer from './RatingContainer';

export default {
  title: 'Components/Rating Container',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    productRatingChange: { action: 'productRatingChange' }
  },
  component: RatingContainer
} as ComponentMeta<typeof RatingContainer>;

const Template: ComponentStory<typeof RatingContainer> = (args) => <RatingContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  productId: 'cypress',
  rating: 3,
  clickable: true
};
