import '../src/style.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { beforeMount } from '@playwright/experimental-ct-vue/hooks';

library.add(faStar);

beforeMount(async ({ app }) => {
  app.component('FontAwesomeIcon', FontAwesomeIcon);
});
