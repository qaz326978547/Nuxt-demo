<template>
    <div>
        User
    </div>

    <Head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="description" />
        <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    </Head>

    <button class="btn" @click="fetchData">Get API</button>
</template>


<script setup lang="ts">
definePageMeta({
    middleware: ['auth']
})
const res = await useFetch<About>("https://vue-lessons-api.vercel.app/seo/user");
const title = computed(() => `${res.data.value?.title} - Nuxt3 user`);
const description = computed(() => `${res.data.value?.description} - Nuxt3 user`);
interface About {
    title: string;
    description: string;
    ogImage: string;
}
const fetchData = async () => {
    const res = await fetch('/api/hello').then(res => res.json());
    console.log(res);
}


</script>