import { test, expect } from '@playwright/experimental-ct-react';
import { SatisfactionStarLocator } from 'playwright/support';

import RatingContainer, { RatingContainerProps } from './RatingContainer';

let clickEvent: { productId: string; rating: number };
const props: RatingContainerProps = {
  productId: 'playwright',
  rating: 3,
  clickable: true,
  productRatingChange: (event) => (clickEvent = event)
};

test('number of filled stars eqals rating', async ({ mount }) => {
  const component = await mount(<RatingContainer {...props} />);

  const star = new SatisfactionStarLocator(component, props.productId);

  await star.expectToBeChecked(1);
  await star.expectToBeChecked(2);
  await star.expectToBeChecked(3);
  await star.expectToBeUnChecked(4);
  await star.expectToBeUnChecked(5);
});

test('emits on click', async ({ mount }) => {
  const component = await mount(<RatingContainer {...props} />);
  const star = new SatisfactionStarLocator(component, props.productId);

  await star.click(2);
  expect(clickEvent).toEqual({ productId: props.productId, rating: 2 });
});
