import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import RatingContainer from './RatingContainer.svelte';

export default {
  title: 'Components/Rating Container',
  component: RatingContainer,
  args: {
    productId: 'storybook',
    rating: 3,
    clickable: false
  },
  argTypes: {
    productRatingChange: { action: 'productRatingChange' }
  }
};

export const Default = {
  play: ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const thirdStar = canvas.getByTestId('storybook-3');
    const fourthStar = canvas.getByTestId('storybook-4');
    expect(thirdStar.firstElementChild).toHaveClass('checked');
    expect(fourthStar.firstElementChild).not.toHaveClass('checked');
    userEvent.click(fourthStar);
    expect(args.productRatingChange).not.toHaveBeenCalled();
  }
};
export const Disappointed = {
  ...Default,
  args: {
    rating: 1
  },
  play: ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const firstStar = canvas.getByTestId('storybook-1');
    const secondStar = canvas.getByTestId('storybook-2');
    expect(firstStar.firstElementChild).toHaveClass('checked');
    expect(secondStar.firstElementChild).not.toHaveClass('checked');
    userEvent.click(secondStar);
    expect(args.productRatingChange).not.toHaveBeenCalled();
  }
};
export const VerySatisfied = {
  ...Default,
  args: {
    rating: 5
  },
  play: ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const fifthStar = canvas.getByTestId('storybook-5');
    expect(fifthStar.firstElementChild).toHaveClass('checked');
    const fourthStar = canvas.getByTestId('storybook-4');
    userEvent.click(fourthStar);
    expect(args.productRatingChange).not.toHaveBeenCalled();
  }
};
export const Clickable = {
  ...Default,
  args: {
    clickable: true
  },
  play: ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const fourthStar = canvas.getByTestId('storybook-4');
    userEvent.click(fourthStar);
    expect(args.productRatingChange).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { productId: 'storybook', rating: 4 }
      })
    );
  }
};
