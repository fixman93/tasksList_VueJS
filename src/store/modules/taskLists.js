const state = {
  tasksList: [
    {
      name: 1
    }, {
      name: 2
    }
  ]
}

const mutations = {
  'ADD_TASKS'(state, { taskName, taskId, taskStatus, taskDescription }) {
    state.tasksList.push({
      name: taskName,
      id: taskId,
      status: taskStatus,
      description: taskDescription
    })
  }
}

const actions = {
  addTask: ({ commit }, task) => {
    commit('ADD_TASKS', task)
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