import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import Transitions from 'vue2-transitions';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(axios);

// Transitions
Vue.use(Transitions);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');
