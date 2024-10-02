import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

import SatisfactionStar from './SatisfactionStar.svelte';

const meta: Meta<typeof SatisfactionStar> = {
  title: 'Components/Satisfaction Star',
  component: SatisfactionStar,
  args: {
    productId: 'storybook',
    position: 1,
    checked: false,
    clickable: false,
    starClick: fn()
  },
  argTypes: {
    starClick: { action: 'starClick' }
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
    await waitFor(() => expect(args.starClick).not.toHaveBeenCalled());
  }
};
export const Checked: Story = {
  ...Default,
  args: {
    checked: true
  },
  play: async ({ args, canvasElement }) => {
    await clickOnStar(canvasElement);
    await waitFor(() => expect(args.starClick).not.toHaveBeenCalled());
  }
};

export const Clickable: Story = {
  ...Default,
  args: {
    clickable: true
  },
  play: async ({ args, canvasElement }) => {
    await clickOnStar(canvasElement);
    await waitFor(() =>
      expect(args.starClick).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: { productId: 'storybook', rating: 1 }
        })
      )
    );
  }
};

export const CheckedAndClickable: Story = {
  ...Default,
  args: {
    clickable: true,
    checked: true
  },
  play: async ({ args, canvasElement }) => {
    await clickOnStar(canvasElement);
    await waitFor(() =>
      expect(args.starClick).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: { productId: 'storybook', rating: 1 }
        })
      )
    );
  }
};
