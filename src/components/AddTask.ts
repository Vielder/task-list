export default {
    name: 'AddTask',
    data() {
        return {
            newTaskTitle: '',
        };
    },
    methods: {
        addTask() {
            if (this.newTaskTitle.trim() !== '') {
                this.$emit('taskAdded', this.newTaskTitle);
                this.newTaskTitle = '';
            }
        },
    },
};