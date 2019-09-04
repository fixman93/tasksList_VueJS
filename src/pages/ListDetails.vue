<template>
  <div>
    <router-link to="/" activeClass="active" tag="h1">
      <a>Back to Home page</a>
    </router-link>
    List Details {{id}}
    <li v-for="(ticket, index) in tickets">tickets</li>
    <button @click="newTicket">Add</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    ...mapActions({
      getAllTickets: "getTickets",
      addNewTicket: "addTicket"
    }),
    newTicket() {
      const data = {
        name: "dsada",
        id: Math.floor(Math.random() * 1000) * 2,
        listId: this.id
      };
      this.addNewTicket(data);
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
