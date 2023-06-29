<template>
  <div class="add-task">
    <input type="text" v-model="newTaskTitle" placeholder="Enter task title" />
    <button @click="addTask">Add Task</button>
  </div>
</template>

<script src="./AddTask.ts"></script>

<style scoped>
.add-task {
  margin-top: 20px;
}

input {
  margin-right: 10px;
}

button {
  cursor: pointer;
}
</style>