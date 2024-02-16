describe('App', () => {
  before(() => cy.visit('/'));

  describe('Elements', () => {
    it('should render title', () => {
      cy.get('h1').should('have.text', 'Vite - Svelte');
    });

    it('should render Vite product card', () => {
      cy.getByTestId('vite').within(() => {
        cy.get('a').should('have.text', 'Vite');
        cy.get('a').should('have.attr', 'href', 'https://vitejs.dev/');
      });
    });

    it('should render Svelte product card', () => {
      cy.getByTestId('svelte').within(() => {
        cy.get('a').should('have.text', 'Svelte');
        cy.get('a').should('have.attr', 'href', 'https://svelte.dev/');
      });
    });

    it('should render Overall Satisfaction card', () => {
      cy.getByTestId('overall-satisfaction').within(() => {
        cy.get('h2').should('have.text', 'Overall Satisfaction');
      });
    });
  });

  describe('Responsive Design', () => {
    it('should display cards in a row for desktop view', () => {
      cy.getByTestId('products').should('have.css', 'grid-auto-flow', 'column');
    });

    it('should display cards on top of each odher for mobile view', () => {
      cy.viewport('iphone-8');
      cy.getByTestId('products').should('have.css', 'grid-auto-flow', 'row');
    });
  });

  describe('Star Rating', () => {
    it('Overall Satisfaction has average satisfaction of products', () => {
      cy.getStar('vite', 1).click();
      cy.getStar('svelte', 1).click();
      cy.getStar('overall-satisfaction', 1).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 2).should('have.class', 'text-white');

      cy.getStar('svelte', 2).click();
      cy.getStar('overall-satisfaction', 1).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 2).should('have.class', 'text-white');

      cy.getStar('svelte', 3).click();
      cy.getStar('overall-satisfaction', 2).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 3).should('have.class', 'text-white');

      cy.getStar('svelte', 4).click();
      cy.getStar('overall-satisfaction', 2).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 3).should('have.class', 'text-white');

      cy.getStar('svelte', 5).click();
      cy.getStar('overall-satisfaction', 3).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 4).should('have.class', 'text-white');
    });
  });
});
