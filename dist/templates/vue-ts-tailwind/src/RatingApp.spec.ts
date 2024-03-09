import { test, expect } from '@playwright/experimental-ct-vue';
import { SatisfactionStarLocator } from 'playwright/support';

import { allProducts } from './ProductModel';
import RatingApp from './RatingApp.vue';

const props = {
  products: allProducts
};

test.describe('Elements', () => {
  test('should render title', async ({ mount }) => {
    const component = await mount(RatingApp, { props });
    await expect(component.locator('h1')).toHaveText('Vite - Vue.js');
  });

  test('should render Vite product card', async ({ mount }) => {
    const component = await mount(RatingApp, { props });
    const viteCard = component.locator('[data-testid=vite]');
    const viteTitle = viteCard.locator('a');
    await expect(viteTitle).toHaveText('Vite');
    await expect(viteTitle).toHaveAttribute('href', 'https://vitejs.dev/');
  });

  test('should render Vue.js product card', async ({ mount }) => {
    const component = await mount(RatingApp, { props });
    const vueCard = component.locator('[data-testid=vue]');
    const vueTitle = vueCard.locator('a');
    await expect(vueTitle).toHaveText('Vue.js');
    await expect(vueTitle).toHaveAttribute('href', 'https://vuejs.org/');
  });

  test('should render Overall Satisfaction card', async ({ mount }) => {
    const component = await mount(RatingApp, { props });
    const overallSatisfactionCard = component.locator('[data-testid=overall-satisfaction]');
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
      const component = await mount(RatingApp, { props });
      await expect(component.locator('[data-testid=products]')).toHaveCSS('grid-auto-flow', 'column');
    });
  });

  test.describe('Mobile', () => {
    test.use({
      viewport: { width: 375, height: 667 }
    });

    test('should display cards in a row', async ({ mount }) => {
      const component = await mount(RatingApp, { props });
      await expect(component.locator('[data-testid=products]')).toHaveCSS('grid-auto-flow', 'row');
    });
  });
});

test.describe('Star Rating', () => {
  test('Overall Satisfaction has average satisfaction of products', async ({ mount }) => {
    const component = await mount(RatingApp, { props });
    const viteStar = new SatisfactionStarLocator(component, 'vite');
    const vueStar = new SatisfactionStarLocator(component, 'vue');
    const overallSatisfactionStar = new SatisfactionStarLocator(component, 'overall-satisfaction');

    await viteStar.click(1);
    await vueStar.click(1);
    await overallSatisfactionStar.expectToBeChecked(1);
    await overallSatisfactionStar.expectToBeUnChecked(2);

    await vueStar.click(2);
    await overallSatisfactionStar.expectToBeChecked(1);
    await overallSatisfactionStar.expectToBeUnChecked(2);

    await vueStar.click(3);
    await overallSatisfactionStar.expectToBeChecked(2);
    await overallSatisfactionStar.expectToBeUnChecked(3);

    await vueStar.click(4);
    await overallSatisfactionStar.expectToBeChecked(2);
    await overallSatisfactionStar.expectToBeUnChecked(3);

    await vueStar.click(5);
    await overallSatisfactionStar.expectToBeChecked(3);
    await overallSatisfactionStar.expectToBeUnChecked(4);
  });
});
