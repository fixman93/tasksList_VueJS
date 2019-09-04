import Vue from 'vue'
import Vuex from 'vuex'
import tasksList from './modules/taskLists';
import tickets from './modules/tickets'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tasksList,
    tickets
  }
})