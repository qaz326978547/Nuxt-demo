import { defineStore } from "pinia";

export const useVoteStore = defineStore('vote', () => {
  interface Vote {
    path: string;
    name: string;
    count: number;
  }

  const voteData = ref<Vote[]>({})

  const setVoteData = (data) => {
    voteData.value = data
    console.log(data);
  }

  return {
    voteData,
    setVoteData
  }
})