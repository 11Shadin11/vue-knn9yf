<template>
  <div class="input">
    <input type="text" :value="id" />

    <button @click="deleteBy()">Удалить</button>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
  },

  methods: {
    deleteBy() {
      this.$emit('deleteBy', this.id);
    },
  },
};
</script>

<style>
.input {
  display: flex;
  margin-right: 10px;
}

.input button {
  margin-left: 10px;
}
</style>
