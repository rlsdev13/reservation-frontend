<script setup lang="ts">
import Boardrooms from './Boardrooms.vue';
import { fetchDataToken } from '@/lib/fetch';
import { ref, type Ref } from 'vue';
const boardroomUrl = import.meta.env.VITE_BOARDROOM_URL;

let boardroomsData : any[];
let isLoaded : Ref<boolean> = ref(false);

async function getData(){
    console.log(isLoaded.value);
    fetchDataToken(boardroomUrl).then((resp) => {
        resp.json().then((data) => {
            boardroomsData = data.boardrooms
            isLoaded.value = true;
            console.log('data',boardroomsData);
            console.log('load',isLoaded.value);
        })
    }).catch((error) => {
        console.log(error);
    });
    // const { boardrooms } = await response.json();
    // boardroomsData = boardrooms
    // console.log(boardrooms);
    console.log('data after',boardroomsData);
    // isLoaded = true;
};

getData();


</script>

<template>
    <div v-if="isLoaded">
        <Boardrooms :boardrooms="boardroomsData"/>
    </div>
</template>