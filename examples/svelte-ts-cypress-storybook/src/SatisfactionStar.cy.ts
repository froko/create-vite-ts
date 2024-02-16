import SatisfactionStar from './SatisfactionStar.svelte';

describe('Satisfaction Star', () => {
  beforeEach(() => {
    cy.mount(SatisfactionStar, {
      props: {
        productId: 'cypress',
        position: 2,
        checked: false,
        clickable: true,
        starClick: cy.spy().as('starClickSpy')
      }
    }).then(({ component }) => {
      component.$on('starClick', cy.spy().as('starClickSpy'));
    });
  });

  it('emits on click', () => {
    cy.getByTestId('cypress-2').click();
    cy.get('@starClickSpy').should('have.been.calledWithMatch', { detail: { productId: 'cypress', rating: 2 } });
  });
});
