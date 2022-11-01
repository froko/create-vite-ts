import { ComponentStory, ComponentMeta } from '@storybook/react';

import SatisfactionStar from './SatisfactionStar';

export default {
  title: 'Components/Satisfaction Star',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    starClick: { action: 'starClick' }
  },
  component: SatisfactionStar
} as ComponentMeta<typeof SatisfactionStar>;

const Template: ComponentStory<typeof SatisfactionStar> = (args) => <SatisfactionStar {...args} />;

export const Default = Template.bind({});
Default.args = {
  productId: 'storybook',
  position: 1,
  checked: false,
  clickable: false
};

export const Checked = Template.bind({});
Checked.args = {
  productId: 'storybook',
  position: 1,
  checked: true,
  clickable: false
};

export const Clickable = Template.bind({});
Clickable.args = {
  productId: 'storybook',
  position: 1,
  checked: false,
  clickable: true
};

export const CheckedAndClickable = Template.bind({});
CheckedAndClickable.args = {
  productId: 'storybook',
  position: 1,
  checked: true,
  clickable: true
};
