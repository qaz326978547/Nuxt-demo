<template>
  <h1 class="text-2xl font-bold">投票列表</h1>
  <div class="grid grid-cols-3">
    <div class="border border-black px-3" v-for="item in store.voteData">
      <img :src="item.path" alt="" />
      <h2 class="text-center">{{ item.name }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVoteStore } from "~/stores/voteStore";

const store = useVoteStore();
// {
//     "vue": {
//         "path": "https://vue-lessons-api.vercel.app/images/Vue.svg",
//         "name": "vue",
//         "count": 0
//     },
//     "react": {
//         "path": "https://vue-lessons-api.vercel.app/images/React.svg",
//         "name": "react",
//         "count": 0
//     },
//     "angular": {
//         "path": "https://vue-lessons-api.vercel.app/images/Angular.svg",
//         "name": "angular",
//         "count": 0
//     }
// }
interface Vote {
  path: string;
  name: string;
  count: number;
}

await useAsyncData("vote", async () => {
  const data = await $fetch<Vote[]>(
    "https://vue-lessons-api.vercel.app/vote/list"
  );
  store.setVoteData(data);
  return data;
});
</script>
