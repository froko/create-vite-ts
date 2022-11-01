import { test, expect, Page, Locator } from '@playwright/test';

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test.describe('Elements', () => {
    test('should render title', async ({ page }) => {
      await expect(page.locator('h1')).toHaveText('Vite - Lit');
    });

    test('should render Vite product card', async ({ page }) => {
      const viteCard = page.locator('#vite');
      const viteTitle = viteCard.locator('a');
      await expect(viteTitle).toHaveText('Vite');
      await expect(viteTitle).toHaveAttribute('href', 'https://vitejs.dev/');
    });

    test('should render Lit product card', async ({ page }) => {
      const litCard = page.locator('#lit');
      const litTitle = litCard.locator('a');
      await expect(litTitle).toHaveText('Lit');
      await expect(litTitle).toHaveAttribute('href', 'https://lit.dev/');
    });

    test('should render Overall Satisfaction card', async ({ page }) => {
      const overallSatisfactionCard = page.locator('#overall-satisfaction');
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
        await expect(page.locator('.responsive-container')).toHaveCSS('grid-auto-flow', 'column');
      });
    });

    test.describe('Mobile', () => {
      test.use({
        viewport: { width: 375, height: 667 }
      });

      test('should display cards in a row', async ({ page }) => {
        await expect(page.locator('.responsive-container')).toHaveCSS('grid-auto-flow', 'row');
      });
    });
  });

  test.describe('Star Rating', () => {
    const getStar = (page: Page, id: 'vite' | 'lit' | 'overall-satisfaction', position: number) =>
      page.locator(`#${id}-${position}`);

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

    test('Overall Satisfaction has average satisfaction of products', async ({ page }) => {
      await getStar(page, 'vite', 1).click();
      await getStar(page, 'lit', 1).click();
      await expectToBeChecked(getStar(page, 'overall-satisfaction', 1));
      await expectToBeUnchecked(getStar(page, 'overall-satisfaction', 2));

      await getStar(page, 'lit', 2).click();
      await expectToBeChecked(getStar(page, 'overall-satisfaction', 1));
      await expectToBeUnchecked(getStar(page, 'overall-satisfaction', 2));

      await getStar(page, 'lit', 3).click();
      await expectToBeChecked(getStar(page, 'overall-satisfaction', 2));
      await expectToBeUnchecked(getStar(page, 'overall-satisfaction', 3));

      await getStar(page, 'lit', 4).click();
      await expectToBeChecked(getStar(page, 'overall-satisfaction', 2));
      await expectToBeUnchecked(getStar(page, 'overall-satisfaction', 3));

      await getStar(page, 'lit', 5).click();
      await expectToBeChecked(getStar(page, 'overall-satisfaction', 3));
      await expectToBeUnchecked(getStar(page, 'overall-satisfaction', 4));
    });
  });
});
