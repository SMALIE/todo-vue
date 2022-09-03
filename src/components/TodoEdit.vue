<template>
  <div class="backdrop w-full h-full fixed z-50">
    <div class="wrapper">
      <div
        class="modal w-full p-4 rounded-2 text-base flex items-center flex-col"
      >
        <div class="mb-5">
          <h1 class="text-2xl font-light z-50 mb-0.5">ToDo Edit</h1>
          <div class="h-1 w-2/3 underliner"></div>
        </div>
        <input
          type="text"
          v-model.trim="item.message"
          class="h-10 bg-transparent border-2 font-light rounded-xl p-3 text-base w-full"
          placeholder="edit message..."
          ref="input"
          @keyup="handleTodoEdit($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: this.data,
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleTodoEdit(event) {
      if (event.keyCode === 13 && this.item.message) {
        this.$emit('item-edit', this.item);
      }
    },
  },
};
</script>

<style scoped>
.backdrop {
  background: rgba(0, 0, 0, 0.8);
}
.modal {
  font-family: 'Roboto', sans-serif;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  padding: 30px 10% 40px;
  margin: 0 8%;
}
</style>
