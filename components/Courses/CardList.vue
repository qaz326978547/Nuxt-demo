<template>
  <nuxt-link
    :to="`/courses/${item.id}`"
    v-for="item in props.courses"
    :key="item.id"
    class="px-2 flex bg-slate-200 hover:bg-slate-400 w-full my-3 rounded-lg"
  >
    <img :src="item.photo" alt="" class="object-contain" />
    <div class="flex flex-col justify-center p-3">
      <h1 class="font-bold">{{ item.name }}</h1>
      <div class="flex justify-between items-center mt-3">
        <div class="flex">
          <img class="rounded-full me-2" :src="item.teacher.img" alt="" />
          <span class="font-medium">{{ item.teacher.name }}</span>
        </div>
        <div class="ml-4">
          <span class="font-bold">NTD${{ $currency(item.money) }}</span>
        </div>
      </div>
    </div>
  </nuxt-link>
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
const props = defineProps({
  courses: {
    type: Array as PropType<Course[]>,
    required: true,
    default: () => [],
  },
});
</script>
