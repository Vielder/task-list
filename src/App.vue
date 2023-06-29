<template>
  <div class="app">
    <h1>Task List</h1>
    <TaskList />
  </div>
</template>

<script>
import TaskList from "@/components/TaskList";

export default {
  name: 'App',
  components: {
    TaskList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
