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

button {
    border-width: 1px;
    cursor: pointer;
    border-radius: 12px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
}

</style>
