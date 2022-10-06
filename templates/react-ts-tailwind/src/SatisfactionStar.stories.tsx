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
  position: 3,
  checked: true,
  clickable: true
};
