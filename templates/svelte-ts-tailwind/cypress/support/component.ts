import { mount } from 'cypress/svelte';

import '../../src/style.css';
import './commands';

Cypress.Commands.add('mount', mount);
