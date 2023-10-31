<template>
  <p class=" text-red-500">{{ data }}</p>
  <div>
    <h1>HOME</h1>

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

const { data } = await useFetch<Data[]>("https://api.nuxtjs.dev/mountains", {

  onRequest({ request, options }) {
    const headersInit: HeadersInit = {};
    options.headers = headersInit;
    // 設置 request headers
    options.headers = options.headers || {};
    options.headers.authorization = `Bearer token`; // 設置 authorization header
    console.log(options.headers);

    //  options.headers.authorization = `Bearer token`;
  },
  onRequestError({ request, options, error }) {
    // 處理 request 錯誤
  },
  onResponse({ request, response, options }) {
    // 處理回傳資料
    return response._data;
  },
  onResponseError({ request, response, options }) {
    // 處理 response 錯誤
  },
});


onMounted(() => {
  console.log("mounted", data.value);
});
</script>
