<script setup lang="ts">
    defineProps<{
        name : string;
        imageUrl : string;
        description : string;
    }>()
</script>

<template>
    <div class="card card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
        <div class="card-body">
            <h2 class="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Watch</button>
                <button class="btn btn-primary">Watch</button>
            </div>
        </div>
    </div>
</template>