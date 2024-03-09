import type { Story } from '@ladle/react';

import RatingContainer, { RatingContainerProps } from './RatingContainer';

export default {
  title: 'Components/Rating Container'
};

const defaultProps = {
  productId: 'ladle',
  rating: 3,
  clickable: false
};

const actions = {
  productRatingChange: { action: 'productRatingChange' }
};

const Template: Story<RatingContainerProps> = (args) => <RatingContainer {...args} />;

export const Default = Template.bind({});
Default.args = defaultProps;
Default.argTypes = actions;

export const Disappointed = Template.bind({});
Disappointed.args = { ...defaultProps, rating: 1 };
Disappointed.argTypes = actions;

export const VerySatisfied = Template.bind({});
VerySatisfied.args = { ...defaultProps, rating: 5 };
VerySatisfied.argTypes = actions;

export const Clickable = Template.bind({});
Clickable.args = { ...defaultProps, clickable: true };
Clickable.argTypes = actions;
