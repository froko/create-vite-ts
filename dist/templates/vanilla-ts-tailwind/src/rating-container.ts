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

    const rating = document.createElement('div');
    rating.classList.add('mx-auto', 'mt-4', 'flex', 'max-w-xs', 'justify-around');
    ratingContainer.appendChild(rating);

    this.stars.forEach((e) => rating.appendChild(e.asHtmlElement));

    return ratingContainer;
  }
}
