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
    addTodo: (todo) => console.log(todo)
  }
};
