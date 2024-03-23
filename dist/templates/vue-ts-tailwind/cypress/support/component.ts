import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { mount } from 'cypress/vue';

import '../../src/style.css';
import './commands';

library.add(faStar);

Cypress.Commands.add('mount', (component, options = {}) => {
  options.global = options.global || {};
  options.global.components = options.global.components || {};
  options.global.components['font-awesome-icon'] = FontAwesomeIcon;

  return mount(component, options);
});
