import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';

import './style.css';
import App from './App.vue';

library.add(faStar);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
