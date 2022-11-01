import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './satisfaction-star';

export default {
  title: 'Components/Satisfaction Star',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    starClick: { action: 'star-click' }
  },
  render: (args) =>
    html`<satisfaction-star
      product-id=${args.productId}
      position=${args.position}
      ?checked=${args.checked}
      ?clickable=${args.clickable}
      @star-click=${args.starClick}
    ></satisfaction-star>`
} as Meta;

export const Default: StoryObj = {
  args: {
    productId: 'storybook',
    position: 1,
    checked: false,
    clickable: false
  }
};

export const Checked: StoryObj = {
  args: {
    productId: 'storybook',
    position: 1,
    checked: true,
    clickable: false
  }
};

export const Clickable: StoryObj = {
  args: {
    productId: 'storybook',
    position: 1,
    checked: false,
    clickable: true
  }
};

export const ClickableAndChecked: StoryObj = {
  args: {
    productId: 'storybook',
    position: 1,
    checked: true,
    clickable: true
  }
};
