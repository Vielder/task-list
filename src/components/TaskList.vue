<template>
  <div class="task-list">
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <div class="task-content">
          <span class="task-name" :style="{ backgroundColor: task.completed ? '#98ef68' : '#fcfcfc' }">
            <!-- Проверяем, открыто ли поле редактирования для текущей задачи -->
            <span v-if="selectedTask && selectedTask.id === task.id && isEditing">
              <input type="text" v-model="selectedTask.title" @keyup.enter="saveTask" @keyup.esc="cancelEditing" />
            </span>
            <span v-else>
              {{ task.title }}
            </span>
          </span>
          <div class="buttons">

            <button @click="markAsCompleted(task.id)" v-if="!task.completed && !(selectedTask && selectedTask.id === task.id && isEditing)">Complete</button>
            <button @click="markAsNotCompleted(task.id)" v-if="task.completed && !(selectedTask && selectedTask.id === task.id && isEditing)">Uncomplete</button>
            <button @click="deleteTask(task.id)" v-if="!(selectedTask && selectedTask.id === task.id && isEditing)">Delete</button>
            <button @click="editTask(task.id)" v-if="!(selectedTask && selectedTask.id === task.id && isEditing)">Edit</button>
            <button @click="cancelEditing(task.id)" v-if="selectedTask && selectedTask.id === task.id && isEditing">Cancel</button>
            <button @click="saveTask" v-if="selectedTask && selectedTask.id === task.id && isEditing">Save</button>
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
  min-width: 460px;
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

.task-name {
    border-radius: 6px;
}

.buttons {
  display: flex;
}

.buttons button {
  margin-left: 10px;
}

</style>