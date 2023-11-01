<template>
  <div class="flex mb-5">
    <img class="object-contain" :src="data?.data[0].photo" alt="" />
    <div class="">
      <h1 class="font-bold">{{ data?.data[0].name }}</h1>
      <div class="flex justify-between items-center mt-3">
        <div class="flex">
          <img
            class="rounded-full me-2"
            :src="data?.data[0].teacher.img"
            alt=""
          />
          <span class="font-medium">{{ data?.data[0].teacher.name }}</span>
        </div>
        <div v-if="data" class="ml-4">
          <span class="font-bold"
            >NTD${{ $currency(data?.data[0].money) }}</span
          >
        </div>
      </div>
    </div>
  </div>

  <div class="flex">
    <nuxt-link class="px-3" :to="`/courses/${data?.data[0].id}/catalog`"
      >章節目錄</nuxt-link
    >
    <nuxt-link class="px-3" :to="`/courses/${data?.data[0].id}/intro`"
      >課程介紹</nuxt-link
    >
    <nuxt-link class="px-3" :to="`/courses/${data?.data[0].id}/catalog`"
      >關於講師</nuxt-link
    >
  </div>
  <NuxtPage />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
interface Course {
  id: number;
  name: string;
  photo: string;
  money: number;
  teacher: {
    name: string;
    img: string;
  };
}
const { data } = await useFetch<{ data: Course[] }>(
  `https://vue-lessons-api.vercel.app/courses/${route.params.courses}`
);

onMounted(() => {
  console.log(data.value);
});
</script>
