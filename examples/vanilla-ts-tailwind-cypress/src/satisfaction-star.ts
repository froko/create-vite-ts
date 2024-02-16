export class SatisfactionStar {
  constructor(
    private readonly productId: string,
    private readonly position: number,
    private readonly checked: boolean,
    private readonly clickable: boolean
  ) {}

  get asHtmlElement() {
    const element = document.createElement('span');
    element.setAttribute('data-testid', `${this.productId}-${this.position}`);
    element.setAttribute('rating', this.position.toString());
    element.classList.add('fa', 'fa-star', 'text-3xl');

    if (this.checked) {
      element.setAttribute('checked', '');
      element.classList.add('text-orange-500');
    }

    if (this.clickable) {
      element.setAttribute('product', this.productId);
      element.classList.add('cursor-pointer', 'hover:text-orange-700');
    } else if (!this.checked) {
      element.classList.add('text-white');
    }

    return element;
  }
}
