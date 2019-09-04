<template>
  <div class="ticket-details">
    <router-link to="/" activeClass="active" tag="h1">
      <a>Back to Home page</a>
    </router-link>
    List Details {{id}}
    <div class="row">
      <draggable class="col-md-6" v-model="myList">
        <h3>All tickets</h3>
        <at-card
          v-for="(element, index) in tickets"
          :class="element.status ? 'list-group-item done' : 'list-group-item'"
          :key="element.id"
        >
          <h4 slot="title">{{ element.name }}</h4>
          <div slot="extra" class="delete-element">
            <i @click="() => deleteTicket(element.id)" class="icon icon-delete"></i>
          </div>
          <at-button @click="modalAlert(element, index)">Open Ticket</at-button>
        </at-card>
      </draggable>
    </div>

    <form>
      <at-input v-model="ticketName" placeholder="Name"></at-input>
      <at-input v-model="ticketDescription" placeholder="Description"></at-input>
      <at-button
        hollow
        class="btn btn-success"
        @click="newTicket"
        :disabled="ticketName.length <= 0 || ticketDescription.length <= 0"
      >Add</at-button>
    </form>
    <at-modal v-model="modal3" title="Modal" @on-confirm="handleConfirm">
      <h4>Ticket ID: {{activeTicket.id}}</h4>
      <label>Name:</label>
      <at-input v-model="activeTicket.name" placeholder="Please enter ticket name"></at-input>
      <label>Description:</label>
      <at-textarea v-model="activeTicket.description"></at-textarea>
      <at-checkbox v-model="activeTicket.status" label="Shenzhen">Ticket status</at-checkbox>
    </at-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import draggable from "vuedraggable";

export default {
  data() {
    return {
      id: this.$route.params.id,
      ticketName: "",
      ticketDescription: "",
      ticketStatus: false,
      modal3: false,
      activeTicket: {}
    };
  },
  methods: {
    ...mapActions({
      getAllTickets: "getTickets",
      addNewTicket: "addTicket",
      newTickekList: "updateTicket",
      deleteTickets: "deleteElement"
    }),
    modalAlert(data, index) {
      this.modal3 = true;
      this.activeTicket = data;
    },
    handleConfirm() {
      this.$Message("Confirm");
      this.newTickekList(this.activeTicket);
    },
    newTicket() {
      const data = {
        name: this.ticketName,
        description: this.ticketDescription,
        status: false,
        id: Math.floor(Math.random() * 1000) * 2,
        listId: this.id
      };
      this.addNewTicket(data);
      this.ticketName = "";
      this.ticketDescription = "";
      this.ticketStatus = false;
    },
    deleteTicket(id) {
      this.deleteTickets(id);
    },
    log: function(evt) {
      window.console.log(evt.moved);
    }
  },
  beforeMount() {
    this.getAllTickets(this.id);
  },
  computed: {
    tickets() {
      return this.$store.getters.tickets;
    },
    myList: {
      get() {
        return this.$store.state.myList;
      },
      set(value) {
        // this.$store.commit("newTickekList", value);
      }
    }
  },
  components: {
    draggable
  }
};
</script>

<style scoped>
.ticket-details form {
  margin-top: 30px;
  border-top: 1px solid #ccc;
  padding-top: 30px;
  max-width: 320px;
  margin: 30px auto;
  width: 100%;
}
.ticket-details form button {
  margin-top: 20px;
}
.list-group-item.done:before {
  position: absolute;
  width: 100%;
  height: 48px;
  background: #0000002b;
  z-index: 100;
  content: "";
}

.list-group-item.done {
  position: relative;
}
.ticket-details h3 {
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 5px;
  font-weight: normal;
  border-bottom: 4px solid #ddd;
}
.delete-element {
  position: relative;
  z-index: 1000;
  cursor: pointer;
}
</style>
