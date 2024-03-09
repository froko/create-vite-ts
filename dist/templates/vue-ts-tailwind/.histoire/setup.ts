import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defineSetupVue3 } from '@histoire/plugin-vue';

import '../src/style.css';
import './style.css';

library.add(faStar);

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.component('font-awesome-icon', FontAwesomeIcon);
});
