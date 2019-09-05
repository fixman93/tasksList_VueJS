<template>
  <div class="home-page">
    <h1>Home</h1>
    <div class="row at-row no-gutter">
      <div class="col-md-8" v-for="(task, index) in tasks">
        <at-card>
          <h4 slot="title">{{task.name}}</h4>
          <div slot="extra">
            <router-link :to="`/listDetails/${task.id}`">
              <a>Show tickets</a>
            </router-link>
          </div>
          <div>
            <at-button type="primary" @click="removelistElement(index)">
              <i class="icon icon-delete"></i>
              Delete
            </at-button>
          </div>
        </at-card>
      </div>
    </div>
    <form>
      <at-input v-model="listName" placeholder="List Name"></at-input>
      <at-button
        hollow
        class="btn btn-success"
        @click="addNewList"
        :disabled="listName.length <= 0"
      >Add</at-button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: function() {
    return {
      listName: ""
    };
  },
  methods: {
    ...mapActions({
      addNewTaskList: "addTask",
      listDelete: "deleteList"
    }),
    addNewList() {
      const data = {
        listName: this.listName,
        listId: Math.floor(Math.random() * 1000)
      };
      this.addNewTaskList(data);
      this.listName = "";
    },
    removelistElement(id) {
      const data = {
        listId: id
      };
      this.listDelete(data);
    }
  },
  computed: {
    tasks() {
      return this.$store.getters.tasksList;
    }
  }
};
</script>

<style scoped>
.home-page form {
  margin-top: 30px;
  border-top: 1px solid #ccc;
  padding-top: 30px;
  max-width: 320px;
  margin: 30px auto;
  width: 100%;
}
.home-page form button {
  margin-top: 20px;
}
</style>
