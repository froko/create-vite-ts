import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import RatingContainer from './RatingContainer.vue';

export default {
  title: 'Components/Rating Container',
  args: {
    productId: 'storybook',
    rating: 3,
    clickable: false
  },
  argTypes: {
    onProductRatingChange: { action: 'productRatingChange' }
  }
};

const Template = (args) => ({
  components: { RatingContainer },
  setup() {
    return { args };
  },
  template: '<RatingContainer v-bind="args" />'
});

export const Default = Template.bind({});
Default.play = ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const thirdStar = canvas.getByTestId('storybook-3');
  const fourthStar = canvas.getByTestId('storybook-4');
  expect(thirdStar).toHaveClass('checked');
  expect(fourthStar).not.toHaveClass('checked');
  userEvent.click(fourthStar);
  expect(args.onProductRatingChange).not.toHaveBeenCalled();
};

export const Disappointed = Template.bind({});
Disappointed.args = { rating: 1 };
Disappointed.play = ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const firstStar = canvas.getByTestId('storybook-1');
  const secondStar = canvas.getByTestId('storybook-2');
  expect(firstStar).toHaveClass('checked');
  expect(secondStar).not.toHaveClass('checked');
  userEvent.click(secondStar);
  expect(args.onProductRatingChange).not.toHaveBeenCalled();
};

export const VerySatisfied = Template.bind({});
VerySatisfied.args = { rating: 5 };
VerySatisfied.play = ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const fifthStar = canvas.getByTestId('storybook-5');
  expect(fifthStar).toHaveClass('checked');
  const fourthStar = canvas.getByTestId('storybook-4');
  userEvent.click(fourthStar);
  expect(args.onProductRatingChange).not.toHaveBeenCalled();
};

export const Clickable = Template.bind({});
Clickable.args = { clickable: true };
Clickable.play = ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const fourthStar = canvas.getByTestId('storybook-4');
  userEvent.click(fourthStar);
  expect(args.onProductRatingChange).toHaveBeenCalledWith({ productId: 'storybook', rating: 4 });
};
