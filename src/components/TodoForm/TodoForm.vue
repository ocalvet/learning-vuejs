<template>
  <div>
    <input type="text" v-model="todo.title" @keyup.enter="addTodo(todo)"/>
    <button @click="addTodo(todo)">Add</button>
  </div>
</template>

<script src="./TodoForm.js"></script>
<style>
</style>

