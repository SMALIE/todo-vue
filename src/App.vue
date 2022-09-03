<template>
  <TodoEdit
    v-if="showModal"
    :data="editItemData"
    @item-edit="replaceItemData"
  />
  <WaveBackground />
  <div class="wrapper">
    <TodoList @item-submit="postItem">
      <div class="h-full overflow-scroll w-full scrollbar">
        <TodoItem
          v-for="item in data"
          :key="item.id"
          :data="item"
          @delete="deleteItem"
          @edit="editItem"
        />
      </div>
    </TodoList>
  </div>
</template>

<script>
// import uniqid from 'uniqid';
import { nanoid } from 'nanoid';
import WaveBackground from './components/WaveBackground.vue';
import TodoList from './components/TodoList.vue';
import TodoItem from './components/TodoItem.vue';
import TodoEdit from './components/TodoEdit.vue';

export default {
  data() {
    return {
      data: [],
      showModal: false,
      editItemData: null,
    };
  },
  components: { WaveBackground, TodoList, TodoItem, TodoEdit },
  methods: {
    postItem(message) {
      this.data.push({ id: `todo-${nanoid()}`, message, done: false });
    },
    deleteItem(id) {
      this.data = this.data.filter((item) => item.id !== id);
    },
    editItem(item) {
      this.showModal = !this.showModal;
      this.editItemData = item;
    },
    replaceItemData(item) {
      this.showModal = !this.showModal;

      const objectToReplace = this.data.find(({ id }) => item.id === id);
      objectToReplace.message = item.message;

      this.data = this.data.map((edit) =>
        edit.id !== objectToReplace.id ? edit : objectToReplace
      );
    },
  },
};
</script>

<style>
#app {
  height: 100vh;
  overflow: hidden;
}
.wrapper {
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 65%;
  top: 50%;
  transform: translateY(-50%);
}
button {
  font-size: initial !important;
  line-height: initial !important;
}
</style>
