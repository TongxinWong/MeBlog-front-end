import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import Axios from 'axios'
Axios.defaults.withCredentials = true;


Vue.prototype.$api = require('./util/api.js')

new Vue({
  router,
  vuetify, 
  render: h => h(App)
}).$mount('#app')
