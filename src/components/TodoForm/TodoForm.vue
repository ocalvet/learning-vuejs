<template>
  <div>
    <h4>Enter a todo</h4>
    <input type="text" v-model="todo.title" @keyup.enter="addTodo(todo)"/>
    <button @click="addTodo(todo)">Add</button>
  </div>
</template>

<script src="./TodoForm.js"></script>
<style>
</style>

