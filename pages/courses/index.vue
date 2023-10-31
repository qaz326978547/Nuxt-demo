<template>
        <div>
                <h1>{{ data }}</h1>
        </div>
</template>

<script setup lang="ts">
const { data } = await useFetch(
        "https://vue-lessons-api.vercel.app/courses/list"
);

onMounted(() => {
        console.log(data.value);
});
</script>
