import TodoForm from '../TodoForm/TodoForm.vue';

export default {
  name: 'HomePage',
  props: {
    title: String,
  },
  components: {
    TodoForm
  }
};
