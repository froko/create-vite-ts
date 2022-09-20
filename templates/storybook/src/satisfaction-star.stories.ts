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
  name: 'Default',
  args: {
    productId: 'storybook',
    position: 1,
    checked: false,
    clickable: true
  }
};
