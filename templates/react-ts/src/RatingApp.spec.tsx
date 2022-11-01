import { test, expect } from '@playwright/experimental-ct-react';
import { Locator } from '@playwright/test';

import { allProducts } from './ProductModel';
import RatingApp from './RatingApp';

test.describe('Elements', () => {
  test('should render title', async ({ mount }) => {
    const component = await mount(<RatingApp products={allProducts} />);
    await expect(component.locator('h1')).toHaveText('Vite - React');
  });

  test('should render Vite product card', async ({ mount }) => {
    const component = await mount(<RatingApp products={allProducts} />);
    const viteCard = component.locator('#vite');
    const viteTitle = viteCard.locator('a');
    await expect(viteTitle).toHaveText('Vite');
    await expect(viteTitle).toHaveAttribute('href', 'https://vitejs.dev/');
  });

  test('should render React product card', async ({ mount }) => {
    const component = await mount(<RatingApp products={allProducts} />);
    const reactCard = component.locator('#react');
    const reactTitle = reactCard.locator('a');
    await expect(reactTitle).toHaveText('React');
    await expect(reactTitle).toHaveAttribute('href', 'https://reactjs.org/');
  });

  test('should render Overall Satisfaction card', async ({ mount }) => {
    const component = await mount(<RatingApp products={allProducts} />);
    const overallSatisfactionCard = component.locator('#overall-satisfaction');
    const overallSatisfactionTitle = overallSatisfactionCard.locator('h2');
    await expect(overallSatisfactionTitle).toHaveText('Overall Satisfaction');
  });
});

test.describe('Responsive Design', () => {
  test.describe('Desktop', () => {
    test.use({
      viewport: { width: 1024, height: 768 }
    });

    test('should display cards in a row', async ({ mount }) => {
      const component = await mount(<RatingApp products={allProducts} />);
      await expect(component.locator('#products')).toHaveCSS('grid-auto-flow', 'column');
    });
  });

  test.describe('Mobile', () => {
    test.use({
      viewport: { width: 375, height: 667 }
    });

    test('should display cards in a row', async ({ mount }) => {
      const component = await mount(<RatingApp products={allProducts} />);
      await expect(component.locator('#products')).toHaveCSS('grid-auto-flow', 'row');
    });
  });
});

test.describe('Star Rating', () => {
  test('Overall Satisfaction has average satisfaction of products', async ({ mount }) => {
    const component = await mount(<RatingApp products={allProducts} />);

    const getStar = (productId: 'vite' | 'react' | 'overall-satisfaction', position: number) =>
      component.locator(`#${productId}-${position}`);

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

    await getStar('vite', 1).click();
    await getStar('react', 1).click();
    await expectToBeChecked(getStar('overall-satisfaction', 1));
    await expectToBeUnchecked(getStar('overall-satisfaction', 2));

    await getStar('react', 2).click();
    await expectToBeChecked(getStar('overall-satisfaction', 1));
    await expectToBeUnchecked(getStar('overall-satisfaction', 2));

    await getStar('react', 3).click();
    await expectToBeChecked(getStar('overall-satisfaction', 2));
    await expectToBeUnchecked(getStar('overall-satisfaction', 3));

    await getStar('react', 4).click();
    await expectToBeChecked(getStar('overall-satisfaction', 2));
    await expectToBeUnchecked(getStar('overall-satisfaction', 3));

    await getStar('react', 5).click();
    await expectToBeChecked(getStar('overall-satisfaction', 3));
    await expectToBeUnchecked(getStar('overall-satisfaction', 4));
  });
});
