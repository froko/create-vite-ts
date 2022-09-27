import RatingContainer from './RatingContainer';

describe('Rating Container', () => {
  const props = {
    productId: 'cypress',
    rating: 3,
    clickable: true
  };

  beforeEach(() => {
    const productRatingChangeSpy = cy.spy().as('productRatingChangeSpy');
    cy.mount(<RatingContainer {...props} productRatingChange={productRatingChangeSpy} />);
  });

  it('number of filled stars eqals rating', () => {
    cy.getStar('cypress', 1).should('have.class', 'text-orange-500');
    cy.getStar('cypress', 2).should('have.class', 'text-orange-500');
    cy.getStar('cypress', 3).should('have.class', 'text-orange-500');
    cy.getStar('cypress', 4).should('not.have.class', 'text-orange-500');
    cy.getStar('cypress', 5).should('not.have.class', 'text-orange-500');
  });

  it('emits on click', () => {
    cy.getStar('cypress', 2).click();
    cy.get('@productRatingChangeSpy').should('have.been.calledWith', { productId: 'cypress', rating: 2 });
  });
});
