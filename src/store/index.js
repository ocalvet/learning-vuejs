import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  todos: [],
};
const mutations = {
  addTodo(s, todo) {
    s.todos.push(todo);
  },
};
const actions = {};
const getters = {
  todos(s) {
    return s.todos;
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
