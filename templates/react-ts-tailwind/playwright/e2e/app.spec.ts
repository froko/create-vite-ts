import { test, expect, Page, Locator } from '@playwright/test';

import { SatisfactionStarLocator } from '../support';

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test.describe('Elements', () => {
    test('should render title', async ({ page }) => {
      await expect(page.locator('h1')).toHaveText('Vite - React');
    });

    test('should render Vite product card', async ({ page }) => {
      const viteCard = page.locator('[data-testid=vite]');
      const viteTitle = viteCard.locator('a');
      await expect(viteTitle).toHaveText('Vite');
      await expect(viteTitle).toHaveAttribute('href', 'https://vitejs.dev/');
    });

    test('should render React product card', async ({ page }) => {
      const reactCard = page.locator('[data-testid=react]');
      const reactTitle = reactCard.locator('a');
      await expect(reactTitle).toHaveText('React');
      await expect(reactTitle).toHaveAttribute('href', 'https://reactjs.org/');
    });

    test('should render Overall Satisfaction card', async ({ page }) => {
      const overallSatisfactionCard = page.locator('[data-testid=overall-satisfaction]');
      const overallSatisfactionTitle = overallSatisfactionCard.locator('h2');
      await expect(overallSatisfactionTitle).toHaveText('Overall Satisfaction');
    });
  });

  test.describe('Responsive Design', () => {
    test.describe('Desktop', () => {
      test.use({
        viewport: { width: 1024, height: 768 }
      });

      test('should display cards in a row', async ({ page }) => {
        await expect(page.locator('[data-testid=products]')).toHaveCSS('grid-auto-flow', 'column');
      });
    });

    test.describe('Mobile', () => {
      test.use({
        viewport: { width: 375, height: 667 }
      });

      test('should display cards in a row', async ({ page }) => {
        await expect(page.locator('[data-testid=products]')).toHaveCSS('grid-auto-flow', 'row');
      });
    });
  });

  test.describe('Star Rating', () => {
    test('Overall Satisfaction has average satisfaction of products', async ({ page }) => {
      const viteStar = new SatisfactionStarLocator(page, 'vite');
      const reactStar = new SatisfactionStarLocator(page, 'react');
      const overallSatisfactionStar = new SatisfactionStarLocator(page, 'overall-satisfaction');

      await viteStar.click(1);
      await reactStar.click(1);
      await overallSatisfactionStar.expectToBeChecked(1);
      await overallSatisfactionStar.expectToBeUnChecked(2);

      await reactStar.click(2);
      await overallSatisfactionStar.expectToBeChecked(1);
      await overallSatisfactionStar.expectToBeUnChecked(2);

      await reactStar.click(3);
      await overallSatisfactionStar.expectToBeChecked(2);
      await overallSatisfactionStar.expectToBeUnChecked(3);

      await reactStar.click(4);
      await overallSatisfactionStar.expectToBeChecked(2);
      await overallSatisfactionStar.expectToBeUnChecked(3);

      await reactStar.click(5);
      await overallSatisfactionStar.expectToBeChecked(3);
      await overallSatisfactionStar.expectToBeUnChecked(4);
    });
  });
});
