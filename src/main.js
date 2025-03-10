import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import './assets/mcm-colors.css';
import './assets/custom-colors.css'; // Add our new custom colors

import './firebase/config';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCalendar, faClock, faMapMarkerAlt, faMoon, faSun, faPalette } from '@fortawesome/free-solid-svg-icons';
import BaseComponents from './components/base';
library.add(faCalendar, faClock, faMapMarkerAlt)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(BaseComponents);

app.config.errorHandler = (err) => {
  console.error('Vue App Error:', err)
}

app.use(router);
app.mount('#app');