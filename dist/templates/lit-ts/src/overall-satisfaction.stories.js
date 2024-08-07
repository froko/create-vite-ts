import './overall-satisfaction';

import { html } from 'lit';

export default {
  title: 'Components/Overall Satisfaction',
  args: {
    rating: 3
  },
  render: (args) => html`<overall-satisfaction overall-rating=${args.rating}></overall-satisfaction>`
};

export const Default = {};
