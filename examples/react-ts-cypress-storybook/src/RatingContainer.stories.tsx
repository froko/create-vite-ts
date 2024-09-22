import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import RatingContainer from './RatingContainer';

const meta: Meta<typeof RatingContainer> = {
  title: 'Components/Rating Container',
  component: RatingContainer,
  args: {
    productId: 'storybook',
    rating: 3,
    clickable: false,
    productRatingChange: fn()
  }
};

export default meta;
type Story = StoryObj<typeof RatingContainer>;

export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const thirdStar = canvas.getByTestId('storybook-3');
    const fourthStar = canvas.getByTestId('storybook-4');
    expect(thirdStar).toHaveClass('checked');
    expect(fourthStar).not.toHaveClass('checked');
    await userEvent.click(fourthStar);
    expect(args.productRatingChange).not.toHaveBeenCalled();
  }
};

export const Disappointed: Story = {
  ...Default,
  args: {
    rating: 1
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const firstStar = canvas.getByTestId('storybook-1');
    const secondStar = canvas.getByTestId('storybook-2');
    expect(firstStar).toHaveClass('checked');
    expect(secondStar).not.toHaveClass('checked');
    await userEvent.click(secondStar);
    expect(args.productRatingChange).not.toHaveBeenCalled();
  }
};

export const VerySatisfied: Story = {
  ...Default,
  args: {
    rating: 5
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const fifthStar = canvas.getByTestId('storybook-5');
    expect(fifthStar).toHaveClass('checked');
    const fourthStar = canvas.getByTestId('storybook-4');
    await userEvent.click(fourthStar);
    expect(args.productRatingChange).not.toHaveBeenCalled();
  }
};

export const Clickable: Story = {
  ...Default,
  args: {
    clickable: true
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const fourthStar = canvas.getByTestId('storybook-4');
    await userEvent.click(fourthStar);
    expect(args.productRatingChange).toHaveBeenCalledWith({
      productId: 'storybook',
      rating: 4
    });
  }
};
