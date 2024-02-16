import { test, expect } from '@playwright/experimental-ct-react';

import SatisfactionStar, { SatisfactionStarProps } from './SatisfactionStar';

let clickEvent: { productId: string; rating: number };
const props: SatisfactionStarProps = {
  productId: 'playwright',
  position: 2,
  checked: false,
  clickable: true,
  starClick: (event) => (clickEvent = event)
};

test('emits on click', async ({ mount }) => {
  const component = await mount(<SatisfactionStar {...props} />);
  await component.click();
  expect(clickEvent).toEqual({ productId: props.productId, rating: 2 });
});
