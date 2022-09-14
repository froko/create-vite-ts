import { SatisfactionStar } from './satisfaction-star';

export class RatingContainer {
  private readonly stars: SatisfactionStar[] = [];

  constructor(productId: string, rating: number, clickable: boolean) {
    this.stars = [1, 2, 3, 4, 5].map(
      (position) => new SatisfactionStar(productId, position, position <= rating, clickable)
    );
  }

  get asHtmlElement() {
    const ratingContainer = document.createElement('div');
    ratingContainer.classList.add('rating');
    this.stars.forEach((e) => ratingContainer.appendChild(e.asHtmlElement));

    return ratingContainer;
  }
}
