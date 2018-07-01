import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  todos: [],
};
const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo);
  }
};
const actions = {};
const getters = {
  todos(state) {
    return state.todos;
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
