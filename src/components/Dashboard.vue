<script setup lang="ts">
import Boardrooms from './Boardrooms.vue';
import { fetchDataToken } from '@/lib/fetch';
import { ref, type Ref } from 'vue';
import { useBoardroomsStore } from '@/stores/counter';
const boardroomUrl = import.meta.env.VITE_BOARDROOM_URL;

let isLoaded : Ref<boolean> = ref(false);
const store = useBoardroomsStore();

async function getData(){
    fetchDataToken(boardroomUrl).then((resp) => {
        resp.json().then((data) => {
            store.boardrooms = data.boardrooms
            isLoaded.value = true;
        })
    }).catch((error) => {
        console.log(error);
    });
};

getData();


</script>

<template>
    <div v-if="isLoaded">
        <Boardrooms :boardrooms="store.boardrooms"/>
    </div>
</template>