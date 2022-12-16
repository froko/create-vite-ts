import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import SatisfactionStar from './SatisfactionStar.vue';

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
    onStarClick: {
      action: 'starClick'
    }
  }
};

const clickOnStar = (canvasElement) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByTestId('storybook-1'));
};

export const Default = {
  play: ({ args, canvasElement }) => {
    clickOnStar(canvasElement);
    expect(args.onStarClick).not.toHaveBeenCalled();
  }
};

export const Checked = {
  ...Default,
  args: {
    checked: true
  },
  play: ({ args, canvasElement }) => {
    clickOnStar(canvasElement);
    expect(args.onStarClick).not.toHaveBeenCalled();
  }
};

export const Clickable = {
  ...Default,
  args: {
    clickable: true
  },
  play: ({ args, canvasElement }) => {
    clickOnStar(canvasElement);
    expect(args.onStarClick).toHaveBeenCalledWith({
      productId: 'storybook',
      rating: 1
    });
  }
};

export const CheckedAndClickable = {
  ...Default,
  args: {
    checked: true,
    clickable: true
  },
  play: ({ args, canvasElement }) => {
    clickOnStar(canvasElement);
    expect(args.onStarClick).toHaveBeenCalledWith({
      productId: 'storybook',
      rating: 1
    });
  }
};
