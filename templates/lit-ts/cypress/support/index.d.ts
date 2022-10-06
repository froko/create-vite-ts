declare global {
  namespace Cypress {
    interface Chainable {
      getStar(id: string, position: number): Chainable<Subject>;
    }
  }
}
