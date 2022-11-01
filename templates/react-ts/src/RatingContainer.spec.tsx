import { test, expect } from '@playwright/experimental-ct-react';
import { Locator } from '@playwright/test';

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

  const getStar = (position: number) => component.locator(`#${props.productId}-${position}`);

  const getClasses = async (locator: Locator) => {
    const classAttribute = await locator.getAttribute('class');
    return classAttribute ? classAttribute.split(' ') : [];
  };

  const expectToBeChecked = async (locator: Locator) => {
    const classes = await getClasses(locator);
    expect(classes.includes('checked')).toBeTruthy();
  };

  const expectToBeUnchecked = async (locator: Locator) => {
    const classes = await getClasses(locator);
    expect(classes.includes('checked')).toBeFalsy();
  };

  await expectToBeChecked(getStar(1));
  await expectToBeChecked(getStar(2));
  await expectToBeChecked(getStar(3));
  await expectToBeUnchecked(getStar(4));
  await expectToBeUnchecked(getStar(5));
});

test('emits on click', async ({ mount }) => {
  const component = await mount(<RatingContainer {...props} />);

  const getStar = (position: number) => component.locator(`#${props.productId}-${position}`);

  await getStar(2).click();
  expect(clickEvent).toEqual({ productId: props.productId, rating: 2 });
});
