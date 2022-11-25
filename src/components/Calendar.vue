<script setup lang="ts">
  import '@fullcalendar/core/vdom' // solves problem with Vite
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import interactionPlugin from '@fullcalendar/interaction'

  const calendarOptions = {
    plugins: [ dayGridPlugin, interactionPlugin ],
    initialView: 'dayGridMonth',
    weekends: true, // initial value
    height : "auto"

  }

  function toggleWeekends() {
    calendarOptions.weekends = !calendarOptions.weekends // toggle the boolean!
  }

</script>
<template>
  <button v-on:click="toggleWeekends">toggle weekends</button>
  <FullCalendar :options="calendarOptions" />
</template>