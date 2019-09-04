<template>
  <div>
    <h1>Home</h1>
    <!-- <li>
      <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
    </li>-->
    <div class="row at-row no-gutter">
      <div class="col-md-8" v-for="(task, index) in tasks">
        <at-card>
          <h4 slot="title">{{task.name}}</h4>
          <div slot="extra">
            <router-link :to="`/listDetails/${task.id}`">
              <a>Link</a>
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
    </form>
    <at-button
      hollow
      class="btn btn-success"
      @click="addNewList"
      :disabled="listName.length <= 0"
    >Add</at-button>
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

<style lang="sass">

</style>
