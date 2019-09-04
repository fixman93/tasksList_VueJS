<template>
  <div>
    <router-link to="/" activeClass="active" tag="h1">
      <a>Back to Home page</a>
    </router-link>
    List Details {{id}}
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
      getAllTickets: "getTickets"
    })
  },
  beforeMount() {
    this.getAllTickets(this.id);
  }
};
</script>
