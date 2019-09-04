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
      listId: data.listId,
      description: data.description,
      status: data.status
    })
    localStorage.setItem('tickets', JSON.stringify(state.tickets));
  },
  'UPDATE_LIST'(state, value) {
    let newTicketsList = state.tickets.filter(function (element) {
      return element.id !== value.id;
    });
    newTicketsList.push({
      name: value.name,
      id: value.id,
      listId: value.listId,
      description: value.description,
      status: value.status
    })
    localStorage.setItem("tickets", JSON.stringify(newTicketsList));

  },
  'DELETE_ELEMENT'(state, id) {
    let newTicketsList = state.tickets.filter(function (element) {
      return element.id !== id;
    });
    localStorage.setItem("tickets", JSON.stringify(newTicketsList));
    state.tickets = newTicketsList
  }
}

const actions = {
  getTickets: ({ commit }, id) => {
    commit('GET_TICKETS', id)
  },
  addTicket: ({ commit }, data) => {
    commit('ADD_TICKET', data)
  },
  updateTicket: ({ commit }, value) => {
    commit('UPDATE_LIST', value)
  },
  deleteElement: ({ commit }, value) => {
    commit('DELETE_ELEMENT', value)
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