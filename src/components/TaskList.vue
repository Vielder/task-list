<template>
  <div class="task-list">
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <div class="task-content">
          <span class="task-name" :style="{ backgroundColor: task.completed ? '#4ccc05' : '#fcfcfc' }">{{ task.title }}</span>
          <div class="buttons">
            <button @click="markAsCompleted(task.id)" v-if="!task.completed">Complete</button>
            <button @click="markAsNotCompleted(task.id)" v-if="task.completed">Uncomplete</button>
            <button @click="deleteTask(task.id)">Delete</button>
          </div>
        </div>
      </li>
    </ul>
    <AddTask @taskAdded="addTask" />
  </div>
</template>

<script src="./TaskList.ts"></script>

<style scoped>
.task-list {
  margin-top: 10px;
  width: 25%;
  min-width: 400px;
  align-items: center;
  display: inline-block;
}

ul {
  list-style-type: none;
  padding: 0;
  border-color: black;
  border-width: thin;
  border-style: solid;
}

li {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
}

.task-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom:1px solid ;
}

.buttons {
  display: flex;
}

.buttons button {
  margin-left: 10px;
}

</style>