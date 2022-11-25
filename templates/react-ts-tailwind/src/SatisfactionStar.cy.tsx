import SatisfactionStar from './SatisfactionStar';

describe('Satisfaction Star', () => {
  const props = {
    productId: 'cypress',
    position: 2,
    checked: false,
    clickable: true
  };

  beforeEach(() => {
    const starClickSpy = cy.spy().as('starClickSpy');
    cy.mount(<SatisfactionStar {...props} starClick={starClickSpy} />);
  });

  it('emits on click', () => {
    cy.getByTestId('cypress-2').click();
    cy.get('@starClickSpy').should('have.been.calledWith', { productId: 'cypress', rating: 2 });
  });
});
