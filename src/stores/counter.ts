import { ref, type Ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBoardroomsStore = defineStore('boardrooms', () => {
  const boardrooms : Ref<any[] | undefined> = ref();
  function deleteBoard( id: string){
    boardrooms.value = boardrooms.value?.filter( room => room.id != id );
  }
  return{ boardrooms, deleteBoard };
})

export const useCounterStore = defineStore('count', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
