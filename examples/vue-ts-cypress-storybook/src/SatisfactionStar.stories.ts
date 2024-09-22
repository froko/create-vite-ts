import { expect, fn, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import SatisfactionStar from './SatisfactionStar.vue';

const meta: Meta<typeof SatisfactionStar> = {
  title: 'Components/Satisfaction Star',
  component: SatisfactionStar,
  args: {
    productId: 'storybook',
    position: 1,
    checked: false,
    clickable: false,
    onStarClick: fn()
  }
};

export default meta;
type Story = StoryObj<typeof SatisfactionStar>;

const clickOnStar = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId('storybook-1'));
};

export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    await clickOnStar(canvasElement);
    expect(args.onStarClick).not.toHaveBeenCalled();
  }
};

export const Checked: Story = {
  ...Default,
  args: {
    checked: true
  },
  play: async ({ args, canvasElement }) => {
    await clickOnStar(canvasElement);
    expect(args.onStarClick).not.toHaveBeenCalled();
  }
};

export const Clickable: Story = {
  ...Default,
  args: {
    clickable: true
  },
  play: async ({ args, canvasElement }) => {
    await clickOnStar(canvasElement);
    expect(args.onStarClick).toHaveBeenCalledWith({
      productId: 'storybook',
      rating: 1
    });
  }
};

export const CheckedAndClickable: Story = {
  ...Default,
  args: {
    checked: true,
    clickable: true
  },
  play: async ({ args, canvasElement }) => {
    await clickOnStar(canvasElement);
    expect(args.onStarClick).toHaveBeenCalledWith({
      productId: 'storybook',
      rating: 1
    });
  }
};
