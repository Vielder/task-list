import AddTask from './AddTask.vue';

export default{
    name: 'TaskList',
    components: {
        AddTask,
    },
    data() {
        return {
            tasks: [
                { id: 1, title: 'Task 1', completed: false},
                { id: 2, title: 'Task 2', completed: true },
                { id: 3, title: 'Task 3', completed: false },
            ],
            newTaskTitle: '',
            selectedTask: null, // Выбранная задача для редактирования
            isEditing: false // Флаг редактирования
        };
    },
    methods: {
        addTask(newTaskTitle) {
            const newTask = {
                id: this.tasks.length + 1,
                title: newTaskTitle,
                completed: false,
            };
            this.tasks.push(newTask);
        },
        markAsCompleted(taskId) {
            const task = this.tasks.find((task) => task.id === taskId);
            if (task) {
                task.completed = true;
            }
        },
        deleteTask(taskId) {
            this.tasks = this.tasks.filter((task) => task.id !== taskId);
        },
        markAsNotCompleted(taskId){
            const task = this.tasks.find((task) => task.id == taskId)
            if (task) {
                task.completed = false;
            }
        },
        editTask(taskId) {
            const task = this.tasks.find(task => task.id === taskId);
            this.selectedTask = task;
            this.isEditing = true;
        },
        saveTask() {
            if (this.selectedTask) {
                this.selectedTask.title = this.selectedTask.title.trim();

                this.isEditing = false;
                this.selectedTask = null;
            }
        },
        cancelEditing() {
            this.isEditing = false;
            this.selectedTask = null;
        },
    },
};