<template>
  <div>
    <input type="text" v-model="todo.title"/>
    <button @click="addTodo(todo)">Add</button>
  </div>
</template>

<script src="./TodoForm.js"></script>
<style>
</style>

