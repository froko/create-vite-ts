import type { Story } from '@ladle/react';

import OverallSatisfaction, { OverallSatisfactionProps } from './OverallSatisfaction';

export default {
  title: 'Components/Overall Satisfaction'
};

export const Default: Story<OverallSatisfactionProps> = (args) => <OverallSatisfaction {...args} />;
Default.args = {
  rating: 3
};
