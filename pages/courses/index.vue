<template>
  <h1 class="text-2xl">Courses index</h1>
  <template v-if="data">
    <div class="flex flex-col w-[400px]">
      <CoursesCardList :courses="data" />
    </div>
  </template>
</template>

<script setup lang="ts">
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
const { data } = await useFetch<Course[]>(
  "https://vue-lessons-api.vercel.app/courses/list"
);

onMounted(() => {
  console.log(data.value);
});
</script>
