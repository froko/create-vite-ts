Cypress.Commands.add('getStar', (id: string, position: number) => {
  return cy.get(`#${id}-${position}`);
});
