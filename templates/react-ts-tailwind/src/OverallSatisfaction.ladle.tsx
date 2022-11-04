import type { Story } from '@ladle/react';

import OverallSatisfaction, { OverallSatisfactionProps } from './OverallSatisfaction';

export default {
  title: 'Components/Overall Satisfaction'
};

export const Default: Story<OverallSatisfactionProps> = (props) => (
  <div className="w-1/2">
    <OverallSatisfaction {...props} />
  </div>
);
Default.args = {
  rating: 3
};
