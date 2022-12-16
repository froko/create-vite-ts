import { html } from 'lit';
import './satisfaction-star';

export default {
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
  render: (args) => html`<satisfaction-star
    product-id=${args.productId}
    position=${args.position}
    ?checked=${args.checked}
    ?clickable=${args.clickable}
    @star-click=${args.starClick}
  ></satisfaction-star>`
};

export const Default = {};

export const Checked = {
  ...Default,
  args: {
    checked: true
  }
};

export const Clickable = {
  ...Default,
  args: {
    clickable: true
  }
};

export const ClickableAndChecked = {
  ...Default,
  args: {
    clickable: true,
    checked: true
  }
};
