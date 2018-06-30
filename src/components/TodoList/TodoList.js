import TodoItem from '../TodoItem/TodoItem.vue';
 
export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    TodoItem
  }
};
