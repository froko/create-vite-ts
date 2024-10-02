import './satisfaction-star';

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

interface Args {
  productId: string;
  position: number;
  checked: boolean;
  clickable: boolean;
}

const meta: Meta = {
  title: 'Components/Satisfaction Star',
  args: {
    productId: 'storybook',
    position: 1,
    checked: false,
    clickable: false
  },
  argTypes: {
    starClick: {
      action: 'star-click'
    }
  },
  render: (args) =>
    html`<satisfaction-star
      product-id=${args.productId}
      position=${args.position}
      ?checked=${args.checked}
      ?clickable=${args.clickable}
      @star-click=${args.starClick}
    ></satisfaction-star>`
};

export default meta;
type Story = StoryObj<typeof meta & Args>;

export const Default: Story = {};

export const Checked: Story = {
  ...Default,
  args: {
    checked: true
  }
};

export const Clickable: Story = {
  ...Default,
  args: {
    clickable: true
  }
};

export const ClickableAndChecked: Story = {
  ...Default,
  args: {
    clickable: true,
    checked: true
  }
};
