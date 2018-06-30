export default {
  name: 'TodoForm',
  data: () => {
    return {
      todos: [{
        title: "Buy milk",
        date: new Date(),
        completed: false,
      },{
        title: "Schedule a doctor appointment",
        date: new Date(),
        completed: false,
      },{
        title: "Schedule the dentist appointment",
        date: new Date(),
        completed: false,
      },{
        title: "Clean the house",
        date: new Date(),
        completed: false,
      }]
    };
  }
};
