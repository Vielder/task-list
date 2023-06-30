import AddTask from './AddTask.vue';
import SortPanel from './SortPanel.vue'

export default{
    name: 'TaskList',
    components: {
        AddTask,
        SortPanel,
    },
    data() {
        return {
            tasks: [
                { id: 1, title: 'Task 1', completed: false},
                { id: 2, title: 'Task 2', completed: true },
                { id: 3, title: 'Task 3', completed: false },
            ],
            newTaskTitle: '',
            selectedTask: null,
            isEditing: false,
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
            this.saveTasksToLocalStorage();
        },
        markAsCompleted(taskId) {
            const task = this.tasks.find((task) => task.id === taskId);
            if (task) {
                task.completed = true;
            }
            this.saveTasksToLocalStorage();
        },
        deleteTask(taskId) {
            this.tasks = this.tasks.filter((task) => task.id !== taskId);
            this.saveTasksToLocalStorage();
        },
        markAsNotCompleted(taskId){
            const task = this.tasks.find((task) => task.id == taskId)
            if (task) {
                task.completed = false;
            }
            this.saveTasksToLocalStorage();
        },
        editTask(taskId) {
            this.selectedTask = this.tasks.find(task => task.id === taskId);
            this.isEditing = true;
        },
        saveTask() {
            if (this.selectedTask) {
                this.selectedTask.title = this.selectedTask.title.trim();

                this.isEditing = false;
                this.selectedTask = null;
            }
            this.saveTasksToLocalStorage();
        },
        cancelEditing() {
            this.isEditing = false;
            this.selectedTask = null;
        },

        saveTasksToLocalStorage() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        loadTasksFromLocalStorage() {
            const savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                this.tasks = JSON.parse(savedTasks);
            }
        },
    },
    mounted() {
        this.loadTasksFromLocalStorage();

    }
};