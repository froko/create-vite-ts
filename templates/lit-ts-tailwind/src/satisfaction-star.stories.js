import { html } from 'lit';

import './satisfaction-star';

export default {
  title: 'Components/Satisfaction Star',
  argTypes: {
    starClick: { action: 'star-click' }
  }
};

const defaultArgs = {
  productId: 'storybook',
  position: 1,
  checked: false,
  clickable: false
};

const Template = (args) => html`<satisfaction-star
  product-id=${args.productId}
  position=${args.position}
  ?checked=${args.checked}
  ?clickable=${args.clickable}
  @star-click=${args.starClick}
></satisfaction-star>`;

export const Default = Template.bind({});
Default.args = defaultArgs;

export const Checked = Template.bind({});
Checked.args = { ...defaultArgs, checked: true };

export const Clickable = Template.bind({});
Clickable.args = { ...defaultArgs, clickable: true };

export const ClickableAndChecked = Template.bind({});
ClickableAndChecked.args = { ...defaultArgs, clickable: true, checked: true };
