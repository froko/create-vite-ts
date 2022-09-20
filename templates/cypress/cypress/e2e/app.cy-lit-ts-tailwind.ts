describe('App', () => {
  before(() => cy.visit('/'));

  describe('Elements', () => {
    it('should render title', () => {
      cy.get('h1').should('contain.text', 'Vite - Lit');
    });

    it('should render Vite product card', () => {
      cy.get('#vite').should('exist');
      cy.get('#vite a').should('have.text', 'Vite');
      cy.get('#vite a').should('have.attr', 'href', 'https://vitejs.dev/');
    });

    it('should render Lit product card', () => {
      cy.get('#lit').should('exist');
      cy.get('#lit a').should('have.text', 'Lit');
      cy.get('#lit a').should('have.attr', 'href', 'https://lit.dev/');
    });

    it('should render Overall Satisfaction card', () => {
      cy.get('#overall-satisfaction').should('exist');
      cy.get('#overall-satisfaction h2').should('have.text', 'Overall Satisfaction');
    });
  });

  describe('Responsive Design', () => {
    it('should display cards in a row for desktop view', () => {
      cy.get('#products').should('have.css', 'grid-auto-flow', 'column');
    });

    it('should display cards on top of each odher for mobile view', () => {
      cy.viewport('iphone-8');
      cy.get('#products').should('have.css', 'grid-auto-flow', 'row');
    });
  });

  describe('Star Rating', () => {
    it('Overall Satisfaction has average satisfaction of products', () => {
      cy.getStar('vite', 1).click();
      cy.getStar('lit', 1).click();
      cy.getStar('overall-satisfaction', 1).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 2).should('have.class', 'text-white');

      cy.getStar('lit', 2).click();
      cy.getStar('overall-satisfaction', 1).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 2).should('have.class', 'text-white');

      cy.getStar('lit', 3).click();
      cy.getStar('overall-satisfaction', 2).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 3).should('have.class', 'text-white');

      cy.getStar('lit', 4).click();
      cy.getStar('overall-satisfaction', 2).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 3).should('have.class', 'text-white');

      cy.getStar('lit', 5).click();
      cy.getStar('overall-satisfaction', 3).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 4).should('have.class', 'text-white');
    });
  });
});
