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
        markTaskAsCompleted(taskId) {
            const task = this.tasks.find((task) => task.id === taskId);
            if (task) {
                task.completed = true;
            }
        },
        deleteTask(taskId) {
            this.tasks = this.tasks.filter((task) => task.id !== taskId);
        },
    },
};