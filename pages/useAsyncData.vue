<template>
    <div>
        <h1 class=" text-2xl">useAsyncData.vue</h1>
        <button class="btn" @click="refreshGetData">GET DATA</button>
        <div class=" border border-gray-600">
            {{ data }}
        </div>
    </div>
</template>

<script setup lang="ts">
interface Data {
    title: string;
    description: string;
    height: string;
    countries: string[];
    continent: string;
    image: string;
    dir: string;
    path: string;
    slug: string;
    updatedAt: string;
}
const testData = ref<Data[]>()

// const { data } = await useFetch<Data[]>('https://api.nuxtjs.dev/mountains')

const { data } = await useAsyncData<Data[]>('getData', () => {
    return $fetch('https://api.nuxtjs.dev/mountains')
})

const refreshGetData = async () => {
    refreshNuxtData('getData');
    console.log('refreshGetData');
}



// const { data } = await useFetch<Data[]>('https://api.nuxtjs.dev/mountains')


</script>