import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { beforeMount } from '@playwright/experimental-ct-vue/hooks';

import '../src/style.css';

library.add(faStar);

beforeMount(async ({ app }) => {
  app.component('FontAwesomeIcon', FontAwesomeIcon);
});
