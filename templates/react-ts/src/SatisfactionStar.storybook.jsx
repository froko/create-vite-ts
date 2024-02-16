import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import SatisfactionStar from './SatisfactionStar';

export default {
  title: 'Components/Satisfaction Star',
  component: SatisfactionStar,
  args: {
    productId: 'storybook',
    position: 1,
    checked: false,
    clickable: false
  },
  argTypes: {
    starClick: {
      action: 'starClick'
    }
  }
};

const clickOnStar = async (canvasElement) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId('storybook-1'));
};

export const Default = {
  play: async ({ args, canvasElement }) => {
    await clickOnStar(canvasElement);
    expect(args.starClick).not.toHaveBeenCalled();
  }
};
export const Checked = {
  ...Default,
  args: {
    checked: true
  },
  play: async ({ args, canvasElement }) => {
    await clickOnStar(canvasElement);
    expect(args.starClick).not.toHaveBeenCalled();
  }
};

export const Clickable = {
  ...Default,
  args: {
    clickable: true
  },
  play: async ({ args, canvasElement }) => {
    await clickOnStar(canvasElement);
    expect(args.starClick).toHaveBeenCalledWith({
      productId: 'storybook',
      rating: 1
    });
  }
};

export const CheckedAndClickable = {
  ...Default,
  args: {
    clickable: true,
    checked: true
  },
  play: async ({ args, canvasElement }) => {
    await clickOnStar(canvasElement);
    expect(args.starClick).toHaveBeenCalledWith({
      productId: 'storybook',
      rating: 1
    });
  }
};
