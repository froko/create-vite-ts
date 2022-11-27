import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import SatisfactionStar from './SatisfactionStar.vue';

export default {
  title: 'Components/Satisfaction Star',
  args: {
    productId: 'storybook',
    position: 1,
    checked: false,
    clickable: false
  },
  argTypes: {
    onStarClick: { action: 'starClick' }
  }
};

const Template = (args) => ({
  components: { SatisfactionStar },
  setup() {
    return { args };
  },
  template: '<SatisfactionStar v-bind="args" />'
});

const clickOnStar = (canvasElement) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByTestId('storybook-1'));
};

export const Default = Template.bind({});
Default.play = ({ args, canvasElement }) => {
  clickOnStar(canvasElement);
  expect(args.onStarClick).not.toHaveBeenCalled();
};

export const Checked = Template.bind({});
Checked.args = { checked: true };
Checked.play = ({ args, canvasElement }) => {
  clickOnStar(canvasElement);
  expect(args.onStarClick).not.toHaveBeenCalled();
};

export const Clickable = Template.bind({});
Clickable.args = { clickable: true };
Clickable.play = ({ args, canvasElement }) => {
  clickOnStar(canvasElement);
  expect(args.onStarClick).toHaveBeenCalledWith({ productId: 'storybook', rating: 1 });
};

export const CheckedAndClickable = Template.bind({});
CheckedAndClickable.args = { checked: true, clickable: true };
CheckedAndClickable.play = ({ args, canvasElement }) => {
  clickOnStar(canvasElement);
  expect(args.onStarClick).toHaveBeenCalledWith({ productId: 'storybook', rating: 1 });
};
