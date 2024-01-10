<template>
  <div v-if="show" class="default-alert">
    {{ message }}
    <button @click="closeAlert">Close</button>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    message: String,
    onClose: Function,
  },
  methods: {
    closeAlert() {
      this.onClose(); // Call the provided onClose function
    },
  },
};
</script>

<style scoped>
.default-alert {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: #2196F3;
  color: white;
  border-radius: 5px;
  display: inline-block;
  z-index: 1000;
}

button {
  margin-left: 10px;
  background-color: white;
  color: #2196F3;
  border: 1px solid #2196F3;
  border-radius: 3px;
  cursor: pointer;
}
</style>
