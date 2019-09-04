import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import 'at-ui-style'
import AtUI from 'at-ui'
import { routes } from './routes'
import store from './store/store';

const router = new VueRouter({
  mode: 'history',
  routes
})
Vue.use(AtUI)
Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})