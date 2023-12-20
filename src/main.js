import { createApp } from 'vue';
import './assets/scss/style.scss';
import App from './App.vue';
// import Montserrat
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
// import Source Serif Pro
import "@fontsource/source-serif-pro";
import "@fontsource/source-serif-pro/700.css";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faMagnifyingGlass, faBagShopping, faBars, faCheck, faUser, faTag);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
