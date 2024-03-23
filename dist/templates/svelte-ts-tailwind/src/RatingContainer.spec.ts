import { test, expect } from '@playwright/experimental-ct-svelte';

import { SatisfactionStarLocator } from '../playwright/support/index.js';

import type { ProductRatingEventArgs } from './RatingAppModel';
import RatingContainer from './RatingContainer.svelte';

const props = {
  productId: 'playwright',
  rating: 3,
  clickable: true
};

const on = {
  productRatingChange: (event: ProductRatingEventArgs) =>
    expect(event).toEqual({ productId: props.productId, rating: 2 })
};

test('number of filled stars eqals rating', async ({ mount }) => {
  const component = await mount(RatingContainer, { props, on });
  const star = new SatisfactionStarLocator(component, props.productId);

  await star.expectToBeChecked(1);
  await star.expectToBeChecked(2);
  await star.expectToBeChecked(3);
  await star.expectToBeUnChecked(4);
  await star.expectToBeUnChecked(5);
});

test('emits on click', async ({ mount }) => {
  const component = await mount(RatingContainer, { props, on });
  const star = new SatisfactionStarLocator(component, props.productId);

  await star.click(2);
});
