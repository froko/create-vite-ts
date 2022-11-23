declare namespace Cypress {
  interface Chainable {
    getByTestId(id: string): Chainable<Subject>;
    getStar(id: string, position: number): Chainable<Subject>;
  }
}
