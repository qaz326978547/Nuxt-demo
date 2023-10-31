<template>
  <div>
    <AboutHeader />
    <Home />
    <h1>{{ $currency(2000000) }}</h1>
    <h1 class="text-3xl font-bold underline text-red-500">
      <ClientOnly>
        {{ $sayHello('Bean') }}
      </ClientOnly>
    </h1>
    <button class="btn">BTN</button>
    <div style="max-width: 500px;">
      <h1>{{ $timeFormat(range.start) }} - {{ $timeFormat(range.end) }}</h1>
      <VDatePicker v-model.range="range" :select-attribute="selectDragAttribute" :drag-attribute="selectDragAttribute"
        @drag="dragValue = $event" />
    </div>

    <AboutFooter />
  </div>
</template>
<script lang="ts" setup>


const route = useRoute();
const router = useRouter();

const res = await useFetch<About>("https://vue-lessons-api.vercel.app/seo/about");
interface About {
  title: string;
  description: string;
  ogImage: string;
}

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      async: true,
    },
  ],
});


// useServerSeoMeta({
//   title: () => `${res.data.value?.title} - Nuxt3`,
//   ogTitle: () => `${res.data.value?.title} - Nuxt3`,
//   description: () => `${res.data.value?.description} - Nuxt3`,
//   ogDescription: () => `${res.data.value?.description} - Nuxt3`,
// });

useSeoMeta({
  ogImage: 'https://autos.yahoo.com.tw/p/r/w1200/car-trim/April2019/befce61c873c3f839566218f88c99085.jpeg',
  ogUrl: 'https://www.google.com',
  title: () => `${res.data.value?.title} - Nuxt3`,
  ogTitle: () => `${res.data.value?.title} - Nuxt3`,
  description: () => `${res.data.value?.description} - Nuxt3`,
  ogDescription: () => `${res.data.value?.description} - Nuxt3`,
})

const range = ref({
  start: new Date(),
  end: new Date(),
});
const dragValue = ref(null);
const selectDragAttribute = computed(() => ({
  popover: {
    visibility: 'hover',
    isInteractive: false,
  },
}));

onMounted(() => {
  console.log('route.name', route.name);
  console.log('route.params', route.params);
  console.log('route.path', route.path);
  console.log('route.query', route.query);

});
</script>
<style scoped></style>
