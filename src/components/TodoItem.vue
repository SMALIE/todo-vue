<template>
  <div class="p-3 w-full tile mb-2 flex">
    <div class="flex grow items-center overflow-scroll mr-3">
      <button @click="handleDone" class="w-5">
        <font-awesome-icon v-if="todo.done" class="fontawesome" icon="check" />
        <font-awesome-icon v-else class="fontawesome" icon="xmark" />
      </button>
      <p class="ml-2 text-sm font-bold text-white">{{ todo.message }}</p>
    </div>
    <div class="flex grow-0 items-center overflow-scroll">
      <button @click="handleDelete" class="mr-3">
        <font-awesome-icon class="fontawesome" icon="trash" />
      </button>
      <button @click="handleEdit" class="">
        <font-awesome-icon class="fontawesome" icon="pen-to-square" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: this.data,
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleDone() {
      this.todo.done = !this.todo.done;
    },
    handleDelete() {
      this.$emit('delete', this.todo.id);
    },
    handleEdit() {
      this.$emit('edit', this.todo);
    },
  },
};
</script>

<style></style>
