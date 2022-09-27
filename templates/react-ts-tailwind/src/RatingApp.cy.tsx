import { allProducts } from './ProductModel';
import RatingApp from './RatingApp';

describe('RatingApp', () => {
  beforeEach(() => cy.mount(<RatingApp products={allProducts} />));

  describe('Elements', () => {
    it('should render title', () => {
      cy.get('h1').should('have.text', 'Vite - React');
    });

    it('should render Vite product card', () => {
      cy.get('#vite').should('exist');
      cy.get('#vite a').should('have.text', 'Vite');
      cy.get('#vite a').should('have.attr', 'href', 'https://vitejs.dev/');
    });

    it('should render React product card', () => {
      cy.get('#react').should('exist');
      cy.get('#react a').should('have.text', 'React');
      cy.get('#react a').should('have.attr', 'href', 'https://reactjs.org/');
    });

    it('should render Overall Satisfaction card', () => {
      cy.get('#overall-satisfaction').should('exist');
      cy.get('#overall-satisfaction h2').should('have.text', 'Overall Satisfaction');
    });
  });

  describe('Star Rating', () => {
    it('Overall Satisfaction has average satisfaction of products', () => {
      cy.getStar('vite', 1).click();
      cy.getStar('react', 1).click();
      cy.getStar('overall-satisfaction', 1).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 2).should('have.class', 'text-white');

      cy.getStar('react', 2).click();
      cy.getStar('overall-satisfaction', 1).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 2).should('have.class', 'text-white');

      cy.getStar('react', 3).click();
      cy.getStar('overall-satisfaction', 2).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 3).should('have.class', 'text-white');

      cy.getStar('react', 4).click();
      cy.getStar('overall-satisfaction', 2).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 3).should('have.class', 'text-white');

      cy.getStar('react', 5).click();
      cy.getStar('overall-satisfaction', 3).should('have.class', 'text-orange-500');
      cy.getStar('overall-satisfaction', 4).should('have.class', 'text-white');
    });
  });
});
