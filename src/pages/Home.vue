<template>
  <div>
    <h1>Home</h1>
    <li v-for="task in tasks">{{task.name}}</li>
    <button class="btn btn-success" @click="addNewList">Add</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      addNewTaskList: "addTask"
    }),
    addNewList() {
      const data = {
        taskName: "task",
        taskId: 1,
        taskStatus: false,
        taskDescription: "description"
      };
      this.addNewTaskList(data);
    }
  },
  computed: {
    tasks() {
      return this.$store.getters.tasksList;
    }
  }
};
</script>

<style lang="sass">

</style>
