const state = {
  tickets: []
}

const mutations = {
  'GET_TICKETS'(state, id) {
    console.log('id', id)
  }
}

const actions = {
  getTickets: ({ commit }, id) => {
    commit('GET_TICKETS', id)

  }
}

export default {
  state,
  mutations,
  actions,

};