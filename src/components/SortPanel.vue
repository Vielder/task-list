<template>
    <div class="sort">
        <div class="sort-names">
            <button @click="sortTasks" >
                <i class="arrow up" v-if="order"></i>
                <i class="arrow down" v-else></i>
            </button>
        </div>
    </div>
</template>

<script src="./SortPanel.ts"></script>

<style scoped>

.sort {
    display: flex;
    justify-content: flex-start;
}

.sort-names {
    margin-left: 5px;
}

.arrow {
    margin-left: 0px;
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
}

.up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
}

.down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
</style>