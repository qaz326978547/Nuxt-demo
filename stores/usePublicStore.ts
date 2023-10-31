import { defineStore } from 'pinia';

export const usePublicStore = defineStore('public',()=>{

    const count = ref<number>(0);

    const addCount = () => {
        count.value++
    }

    return {
        count,
        addCount
    }
})