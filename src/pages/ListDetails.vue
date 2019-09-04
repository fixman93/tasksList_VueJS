<template>
  <div class="ticket-details">
    <router-link to="/" activeClass="active" tag="h1">
      <a>Back to Home page</a>
    </router-link>
    List Details {{id}}
    <li v-for="(ticket, index) in tickets">
      {{ticket.name}}
      <br>
      {{ticket.description}}
      <br>
      {{ticket.status}}
    </li>

    <form>
      <at-input v-model="ticketName" placeholder="Name"></at-input>
      <at-input v-model="ticketDescription" placeholder="Description"></at-input>
      <at-checkbox v-model="ticketStatus" label="Shenzhen">Status</at-checkbox>
    </form>
    <at-button
      hollow
      class="btn btn-success"
      @click="newTicket"
      :disabled="ticketName.length <= 0 || ticketDescription.length <= 0"
    >Add</at-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
      ticketName: "",
      ticketDescription: "",
      ticketStatus: false
    };
  },
  methods: {
    ...mapActions({
      getAllTickets: "getTickets",
      addNewTicket: "addTicket"
    }),
    newTicket() {
      const data = {
        name: this.ticketName,
        description: this.ticketDescription,
        status: this.ticketStatus,
        id: Math.floor(Math.random() * 1000) * 2,
        listId: this.id
      };
      this.addNewTicket(data);
      this.ticketName = "";
      this.ticketDescription = "";
      this.ticketStatus = false;
    }
  },
  beforeMount() {
    this.getAllTickets(this.id);
  },
  computed: {
    tickets() {
      return this.$store.getters.tickets;
    }
  }
};
</script>
