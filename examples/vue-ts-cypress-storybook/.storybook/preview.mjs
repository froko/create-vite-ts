import '../src/style.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { setup } from '@storybook/vue3';

library.add(faStar);
setup((app) => app.component('FontAwesomeIcon', FontAwesomeIcon));

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
