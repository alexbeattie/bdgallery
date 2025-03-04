import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css'; // We'll create this file
import './firebase/config'; // We'll create this file
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendar, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faCalendar, faClock, faMapMarkerAlt)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)

app.config.errorHandler = (err) => {
  console.error('Vue App Error:', err)
}

app.use(router);
app.mount('#app');