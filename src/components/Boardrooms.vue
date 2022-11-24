<script setup lang="ts">
import Card from './Card.vue';
import { defineProps, toRefs } from "vue";

const props = defineProps<{
    boardrooms : any[];
}>()

const { boardrooms } = toRefs( props );

</script>

<template>
    <div class="flex flex-wrap px-2 mt-4">
        <div 
            v-for="boardroom in boardrooms" :key="boardroom.id"
            class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
        >
            <Card 
                :id="boardroom.id"  
                :name="boardroom.name" 
                :description="boardroom.description" 
                :image-url="boardroom.imageUrl"
            />
        </div>
    </div>
</template>