import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import SatisfactionStar from './SatisfactionStar.svelte';

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
    starClick: { action: 'starClick' }
  }
};

const clickOnStar = (canvasElement) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByTestId('storybook-1'));
};

export const Default = {
  play: ({ args, canvasElement }) => {
    clickOnStar(canvasElement);
    expect(args.starClick).not.toHaveBeenCalled();
  }
};

export const Checked = {
  ...Default,
  args: {
    checked: true
  },
  play: ({ args, canvasElement }) => {
    clickOnStar(canvasElement);
    expect(args.starClick).not.toHaveBeenCalled();
  }
};

export const Clickable = {
  ...Default,
  args: {
    clickable: true
  },
  play: ({ args, canvasElement }) => {
    clickOnStar(canvasElement);
    expect(args.starClick).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { productId: 'storybook', rating: 1 }
      })
    );
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
    expect(args.starClick).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { productId: 'storybook', rating: 1 }
      })
    );
  }
};
