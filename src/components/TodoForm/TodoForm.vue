<template>
  <div>
    <h4>Todo Form</h4>
    <div class="todo-item" v-for="(todo, i) in todos" :key="i">{{ todo.title }}</div>
  </div>
</template>

<script src="./TodoForm.js"></script>
<style>
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

