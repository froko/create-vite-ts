import { test, expect } from '@playwright/experimental-ct-vue';

import { ProductRatingEventArgs } from './RatingAppModel';
import SatisfactionStar from './SatisfactionStar.vue';

let clickEvent: ProductRatingEventArgs;
const props = {
  productId: 'playwright',
  position: 2,
  checked: false,
  clickable: true
};

const on = {
  starClick: (event: ProductRatingEventArgs) => (clickEvent = event)
};

test('emits on click', async ({ mount }) => {
  const component = await mount(SatisfactionStar, { props, on });
  await component.click();
  expect(clickEvent).toEqual({ productId: props.productId, rating: props.position });
});
