import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import SatisfactionStar from './SatisfactionStar';

export default {
  title: 'Components/Satisfaction Star',
  args: {
    productId: 'storybook',
    position: 1,
    checked: false,
    clickable: false
  },
  argTypes: {
    starClick: { action: 'starClick' }
  }
};

const Template = (args) => <SatisfactionStar {...args} />;

const clickOnStar = (canvasElement) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByTestId('storybook-1'));
};

export const Default = Template.bind({});
Default.play = ({ args, canvasElement }) => {
  clickOnStar(canvasElement);
  expect(args.starClick).not.toHaveBeenCalled();
};

export const Checked = Template.bind({});
Checked.args = { checked: true };
Checked.play = ({ args, canvasElement }) => {
  clickOnStar(canvasElement);
  expect(args.starClick).not.toHaveBeenCalled();
};

export const Clickable = Template.bind({});
Clickable.args = { clickable: true };
Clickable.play = ({ args, canvasElement }) => {
  clickOnStar(canvasElement);
  expect(args.starClick).toHaveBeenCalledWith({ productId: 'storybook', rating: 1 });
};

export const CheckedAndClickable = Template.bind({});
CheckedAndClickable.args = { clickable: true, checked: true };
CheckedAndClickable.play = ({ args, canvasElement }) => {
  clickOnStar(canvasElement);
  expect(args.starClick).toHaveBeenCalledWith({ productId: 'storybook', rating: 1 });
};
