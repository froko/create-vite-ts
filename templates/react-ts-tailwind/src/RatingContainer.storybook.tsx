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
  productId: 'storybook',
  rating: 3,
  clickable: false
};

export const Disappointed = Template.bind({});
Disappointed.args = {
  productId: 'storybook',
  rating: 1,
  clickable: false
};

export const VerySatisfied = Template.bind({});
VerySatisfied.args = {
  productId: 'storybook',
  rating: 5,
  clickable: false
};

export const Clickable = Template.bind({});
Clickable.args = {
  productId: 'storybook',
  rating: 3,
  clickable: true
};
