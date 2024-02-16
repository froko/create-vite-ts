import SatisfactionStar from './SatisfactionStar.vue';

describe('Satisfaction Star', () => {
  beforeEach(() => {
    cy.mount(SatisfactionStar, {
      props: {
        productId: 'cypress',
        position: 2,
        checked: false,
        clickable: true,
        onStarClick: cy.spy().as('starClickSpy')
      }
    });
  });

  it('emits on click', () => {
    cy.getByTestId('cypress-2').click();
    cy.get('@starClickSpy').should('have.been.calledWith', { productId: 'cypress', rating: 2 });
  });
});
