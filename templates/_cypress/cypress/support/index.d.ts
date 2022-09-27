<% if (react ) { %>import { MountOptions, MountReturn } from 'cypress/react18';

<% } %>declare global {
  namespace Cypress {
    interface Chainable {<% if (react ) { %>
      mount(component: React.ReactNode, options?: MountOptions): Chainable<MountReturn>;<% } %>
      getStar(id: string, position: number): Chainable<Subject>;
    }
  }
}
