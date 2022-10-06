import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './overall-satisfaction';

export default {
  title: 'Components/Overall Satisfaction',
  parameters: {
    layout: 'centered'
  },
  render: (args) => html`<overall-satisfaction overall-rating=${args.overallRating}></overall-satisfaction>`
} as Meta;

export const Default: StoryObj = {
  name: 'Default',
  args: {
    overallRating: 3
  }
};
