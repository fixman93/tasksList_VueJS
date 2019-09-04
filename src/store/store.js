import Vue from 'vue'
import Vuex from 'vuex'
import tasksList from './modules/taskLists';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tasksList
  }
})