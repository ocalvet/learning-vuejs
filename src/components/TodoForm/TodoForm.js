export default {
  name: 'TodoForm',
  data: () => {
    return {
      todo: {
        title: '',
        completed: false,
      },
    };
  },
  methods: {
    addTodo(todo) {
      this.$store.commit('addTodo', todo);
      this.todo = { title: '', completed: false };
    }
  }
};
