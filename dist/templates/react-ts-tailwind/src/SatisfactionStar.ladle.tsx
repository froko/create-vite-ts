import type { Story } from '@ladle/react';

import SatisfactionStar, { SatisfactionStarProps } from './SatisfactionStar';

export default {
  title: 'Components/Satisfaction Star'
};

const defaultProps = {
  productId: 'ladle',
  position: 1,
  checked: false,
  clickable: false
};

const actions = {
  starClick: { action: 'starClick' }
};

const Template: Story<SatisfactionStarProps> = (args) => <SatisfactionStar {...args} />;

export const Default = Template.bind({});
Default.args = defaultProps;
Default.argTypes = actions;

export const Checked = Template.bind({});
Checked.args = { ...defaultProps, checked: true };
Checked.argTypes = actions;

export const Clickable = Template.bind({});
Clickable.args = { ...defaultProps, clickable: true };
Clickable.argTypes = actions;

export const CheckedAndClickable = Template.bind({});
CheckedAndClickable.args = { ...defaultProps, checked: true, clickable: true };
CheckedAndClickable.argTypes = actions;
