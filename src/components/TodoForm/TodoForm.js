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
      this.$emit('addTodo', todo);
      this.todo = { title: '', completed: false };
    }
  }
};
