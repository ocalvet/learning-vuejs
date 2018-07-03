<template>
  <div class="todo-list">
    <h4>Todo List</h4>
    <div class="todo-item" v-for="(todo, i) in todos" :key="i">
      <TodoItem :title="todo.title" />
    </div>
  </div>
</template>

<script src="./TodoList.js"></script>
<style scoped>
.todo-list {
  margin-top: 30px;
}
.todo-item {
  padding: 10px 20px;
  background-color: azure;
  margin-bottom: 5px;
  font-variant: small-caps;
}
.todo-item:hover {
  background-color: bisque;
}
</style>

