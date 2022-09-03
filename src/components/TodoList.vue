<template>
  <div class="todo w-full h-full flex items-center flex-col">
    <div class="mb-5">
      <h1 class="text-2xl font-light z-50 mb-0.5">ToDo List</h1>
      <div class="h-1 w-2/3 underliner"></div>
    </div>
    <input
      type="text"
      v-model.trim="message"
      class="h-10 bg-transparent border-2 font-light rounded-md p-3 text-base w-full"
      placeholder="message..."
      ref="input"
      @keyup="handleTodoSubmit($event)"
    />
    <div class="h-1 w-full underliner-2 mt-8 mb-8"></div>
    <slot></slot>
  </div>
</template>

<script>
/* add icons to the library */
export default {
  data() {
    return { message: null };
  },
  methods: {
    handleTodoSubmit(event) {
      if (event.keyCode === 13 && this.message) {
        this.$emit('item-submit', this.message);
        this.message = '';
      }
    },
  },
};
</script>

<style>
.todo {
  font-family: 'Roboto', sans-serif;
  backdrop-filter: blur(9px);
  background: rgba(233, 239, 245, 0.6);
  border-radius: 30px;
  padding: 20px 10%;
  margin: 0 8%;
  /* top: 50%;
  transform: translateY(-50%); */
}

.fontawesome {
  color: white;
  font-size: 15px;
}

input[type='text'] {
  border-color: rgb(0, 89, 255);
}

.underliner {
  background: linear-gradient(
    90deg,
    rgba(0, 102, 255, 1) 0%,
    rgba(202, 49, 255, 1) 100%
  );
  border-radius: 2px;
}
.underliner-2 {
  background: linear-gradient(
    90deg,
    rgba(0, 235, 255, 1) 0%,
    rgba(255, 49, 177, 1) 100%
  );
  height: 4px;
  border-radius: 2px;
}
.tile {
  background: linear-gradient(
    90deg,
    rgba(0, 175, 255, 1) 0%,
    rgba(255, 49, 177, 1) 100%
  );
  border-radius: 5px;
}

.scrollbar::-webkit-scrollbar {
  display: none;
}
.scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
