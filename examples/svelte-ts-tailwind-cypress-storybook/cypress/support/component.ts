import '../../src/style.css';
import './commands';

import { mount } from 'cypress/svelte';

Cypress.Commands.add('mount', mount);
