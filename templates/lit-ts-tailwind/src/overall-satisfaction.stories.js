import { html } from 'lit';

import './overall-satisfaction';

export default {
  title: 'Components/Overall Satisfaction',
  render: (args) => html`<overall-satisfaction overall-rating=${args.overallRating}></overall-satisfaction>`
};

const defaultArgs = {
  overallRating: 3
};

const Template = (args) => html`<overall-satisfaction overall-rating=${args.overallRating}></overall-satisfaction>`;

export const Default = Template.bind({});
Default.args = defaultArgs;
