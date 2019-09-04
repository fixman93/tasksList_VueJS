const tasks = localStorage.getItem("taskLists")
const state = {
  tasksList: tasks ? JSON.parse(tasks) : []
}

const mutations = {
  'ADD_LIST'(state, { listName, listId }) {
    state.tasksList.push({
      name: listName,
      id: listId
    })
    localStorage.setItem("taskLists", JSON.stringify(state.tasksList));
  },
  'DELETE_LIST'(state, { listId }) {
    state.tasksList.splice(listId, 1)
    localStorage.setItem("taskLists", JSON.stringify(state.tasksList));
  }
}

const actions = {
  addTask: ({ commit }, task) => {
    commit('ADD_LIST', task)

  },
  deleteList: ({ commit }, listId) => {
    commit('DELETE_LIST', listId)

  }
}

const getters = {
  tasksList: state => {
    return state.tasksList;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};