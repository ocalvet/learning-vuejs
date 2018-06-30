import TodoForm from '../TodoForm/TodoForm.vue';
import TodoList from '../TodoList/TodoList.vue';

export default {
  name: 'HomePage',
  props: {
    title: String,
  },
  components: {
    TodoForm,
    TodoList,
  }
};
