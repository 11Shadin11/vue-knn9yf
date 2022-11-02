<template>
  <div id="app">
    <form-input
      v-for="(item, index) in list"
      :id="item.id"
      :key="item.id"
      @deleteBy="deleteByID(index)"
    />

    <button @click="addOne">Добавить еще +1</button>
  </div>
</template>

<script>
import Input from './components/Input.vue';

export default {
  components: {
    FormInput: Input,
  },

  data() {
    return {
      list: [{ id: 0 }, { id: 1 }, { id: 2 }],
    };
  },

  methods: {
    addOne() {
      if (this.list.length > 0) {
        let lastId = this.list[this.list.length - 1].id;
        this.list.push({ id: lastId + 1 });
      } else {
        let lastId = 0;
        this.list.push({ id: lastId });
      }
    },
    deleteByID(id) {
      if (this.list.length > 1) {
        this.list.splice(id, 1);
      } else {
        this.list.pop();
      }
      console.log(id);
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#app > * {
  margin-bottom: 10px;
}
</style>
