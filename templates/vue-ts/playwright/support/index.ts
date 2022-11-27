import { Locator, expect, Page } from '@playwright/test';

export class SatisfactionStarLocator {
  constructor(private readonly component: Locator | Page, private readonly productId: string) {}

  click = async (position: number) => {
    const star = this.getStar(position);
    await star.click();
  };

  expectToBeChecked = async (position: number) => {
    const star = this.getStar(position);
    const classes = await this.getClasses(star);
    expect(classes.includes('checked')).toBeTruthy();
  };

  expectToBeUnChecked = async (position: number) => {
    const star = this.getStar(position);
    const classes = await this.getClasses(star);
    expect(classes.includes('checked')).toBeFalsy();
  };

  private getStar = (position: number) => this.component.locator(`[data-testid=${this.productId}-${position}]`);

  private getClasses = async (locator: Locator) => {
    const classAttribute = await locator.getAttribute('class');
    return classAttribute ? classAttribute.split(' ') : [];
  };
}
