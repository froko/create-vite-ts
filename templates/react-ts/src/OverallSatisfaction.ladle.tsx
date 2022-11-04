import type { Story } from '@ladle/react';

import OverallSatisfaction, { OverallSatisfactionProps } from './OverallSatisfaction';

export default {
  title: 'Components/Overall Satisfaction'
};

export const Default: Story<OverallSatisfactionProps> = (props) => <OverallSatisfaction {...props} />;
Default.args = {
  rating: 3
};
