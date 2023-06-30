export default {
    name: "SortPanel",
    props: {
        tasks: {
            type: Array,
            required: true,
        },
    },
    data() {
        return{
            order: false
        }
    },
    methods: {
        sortTasks() {
            if(this.order){
                this.tasks.sort((a, b) => a.title.localeCompare(b.title));
            } else {
                this.tasks.sort((a, b) => b.title.localeCompare(a.title));
            }
            this.order = !this.order;
        },
    },
}