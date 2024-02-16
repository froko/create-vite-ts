import { MountOptions, MountReturn } from 'cypress/vue';

declare global {
  namespace Cypress {
    interface Chainable {
      mount(component, options?: MountOptions): Chainable<MountReturn>;
      getByTestId(id: string): Chainable<Subject>;
      getStar(id: string, position: number): Chainable<Subject>;
    }
  }
}
