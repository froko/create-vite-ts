import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import RatingContainer from './RatingContainer';

export default {
  title: 'Components/Rating Container',
  args: {
    productId: 'storybook',
    rating: 3,
    clickable: false
  },
  argTypes: {
    productRatingChange: { action: 'productRatingChange' }
  }
};

const Template = (args) => <RatingContainer {...args} />;

export const Default = Template.bind({});
Default.play = ({ args, canvasElement }) => {
  setTimeout(() => {
    const canvas = within(canvasElement);
    const thirdStar = canvas.getByTestId('storybook-3');
    const fourthStar = canvas.getByTestId('storybook-4');
    expect(thirdStar).toHaveClass('checked');
    expect(fourthStar).not.toHaveClass('checked');
    userEvent.click(fourthStar);
    expect(args.productRatingChange).not.toHaveBeenCalled();
  }, 100);
};

export const Disappointed = Template.bind({});
Disappointed.args = { rating: 1 };
Disappointed.play = ({ args, canvasElement }) => {
  setTimeout(() => {
    const canvas = within(canvasElement);
    const firstStar = canvas.getByTestId('storybook-1');
    const secondStar = canvas.getByTestId('storybook-2');
    expect(firstStar).toHaveClass('checked');
    expect(secondStar).not.toHaveClass('checked');
    userEvent.click(secondStar);
    expect(args.productRatingChange).not.toHaveBeenCalled();
  }, 100);
};

export const VerySatisfied = Template.bind({});
VerySatisfied.args = { rating: 5 };
VerySatisfied.play = ({ args, canvasElement }) => {
  setTimeout(() => {
    const canvas = within(canvasElement);
    const fifthStar = canvas.getByTestId('storybook-5');
    expect(fifthStar).toHaveClass('checked');
    const fourthStar = canvas.getByTestId('storybook-4');
    userEvent.click(fourthStar);
    expect(args.productRatingChange).not.toHaveBeenCalled();
  }, 100);
};

export const Clickable = Template.bind({});
Clickable.args = { clickable: true };
Clickable.play = ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const fourthStar = canvas.getByTestId('storybook-4');
  userEvent.click(fourthStar);
  expect(args.productRatingChange).toHaveBeenCalledWith({ productId: 'storybook', rating: 4 });
};
