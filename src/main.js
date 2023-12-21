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
import { faMagnifyingGlass, faBagShopping, faBars, faCheck, faUser, faTag, faXmark, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faMagnifyingGlass, faBagShopping, faBars, faCheck, faUser, faTag, faXmark, faClock, faPhone, faTwitter, faInstagram, faFacebookF);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
