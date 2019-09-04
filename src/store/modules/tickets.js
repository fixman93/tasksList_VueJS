let ticketData = localStorage.getItem("tickets")
const state = {
  tickets: ticketData ? JSON.parse(ticketData) : [],
  id: null
}

const mutations = {
  'GET_TICKETS'(state, id) {
    state.id = id
  },
  'ADD_TICKET'(state, data) {
    state.tickets.push({
      name: data.name,
      id: data.id,
      listId: data.listId
    })
    localStorage.setItem('tickets', JSON.stringify(state.tickets));
  }
}

const actions = {
  getTickets: ({ commit }, id) => {
    commit('GET_TICKETS', id)
  },
  addTicket: ({ commit }, data) => {
    commit('ADD_TICKET', data)
  }
}

const getters = {
  tickets: (state, getters) => {
    let tickets = state.tickets.filter((ticket) => {
      return ticket.listId == state.id;
    });
    return tickets
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};