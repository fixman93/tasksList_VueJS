import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import 'at-ui-style'
import AtUI from 'at-ui'
import { routes } from './routes'

const router = new VueRouter({
  mode: 'history',
  routes
})
Vue.use(AtUI)
Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})