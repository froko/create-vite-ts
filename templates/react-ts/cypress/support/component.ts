import { mount } from 'cypress/react18';

import '../../src/style.css';
import './commands';

Cypress.Commands.add('mount', mount);
