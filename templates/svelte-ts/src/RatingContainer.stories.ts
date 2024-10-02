import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

import RatingContainer from './RatingContainer.svelte';

const maeta: Meta<typeof RatingContainer> = {
  title: 'Components/Rating Container',
  component: RatingContainer,
  args: {
    productId: 'storybook',
    rating: 3,
    clickable: false,
    productRatingChange: fn()
  },
  argTypes: {
    productRatingChange: { action: 'productRatingChange' }
  }
};

export default maeta;
type Story = StoryObj<typeof RatingContainer>;

export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const thirdStar = canvas.getByTestId('storybook-3');
    const fourthStar = canvas.getByTestId('storybook-4');
    expect(thirdStar.firstElementChild).toHaveClass('checked');
    expect(fourthStar.firstElementChild).not.toHaveClass('checked');
    await userEvent.click(fourthStar);
    await waitFor(() => expect(args.productRatingChange).not.toHaveBeenCalled());
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
    expect(firstStar.firstElementChild).toHaveClass('checked');
    expect(secondStar.firstElementChild).not.toHaveClass('checked');
    await userEvent.click(secondStar);
    await waitFor(() => expect(args.productRatingChange).not.toHaveBeenCalled());
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
    expect(fifthStar.firstElementChild).toHaveClass('checked');
    const fourthStar = canvas.getByTestId('storybook-4');
    await userEvent.click(fourthStar);
    await waitFor(() => expect(args.productRatingChange).not.toHaveBeenCalled());
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
    await waitFor(() =>
      expect(args.productRatingChange).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: { productId: 'storybook', rating: 4 }
        })
      )
    );
  }
};
