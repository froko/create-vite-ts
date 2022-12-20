Cypress.Commands.add('getByTestId', (id: string) => {
  return cy.get(`[data-testid=${id}]`);
});

Cypress.Commands.add('getStar', (id: string, position: number) => {
  return cy.get(`[data-testid=${id}-${position}]`).children();
});

export {};
