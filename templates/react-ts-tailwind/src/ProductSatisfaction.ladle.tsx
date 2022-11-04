import { Story } from '@ladle/react';

import ProductSatisfaction, { ProductSatisfactionProps } from './ProductSatisfaction';

export default {
  title: 'Components/Product Satisfaction'
};

export const Default: Story<ProductSatisfactionProps> = (props) => (
  <div className="w-1/2">
    <ProductSatisfaction {...props} />
  </div>
);
Default.args = {
  product: {
    id: 'ladle',
    title: 'Ladle',
    url: 'https://ladle.dev/',
    description: 'Develop and test your React stories faster',
    rating: 3
  }
};
