<template>
  <div>
    <!-- <ClientOnly>
      <NuxtLoadingIndicator
        color="#7C75FF"
        :height="10"
        :throttle="0"
        :duration="1000"
      />
    </ClientOnly> -->
    <vue-element-loading :active="isLoading" spinner="bar-fade-scale" />

    <header class="flex">
      <nuxt-link
        v-for="route in routeList"
        active-class="bg-black text-white"
        class="px-6 text-blue-600"
        :to="route.path"
      >
        {{ route.name }}
      </nuxt-link>
    </header>
    <slot />

    <footer>
      <p>&copy; 2023</p>
    </footer>
  </div>
</template>
<script lang="ts" setup>
const routeList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "User", path: "/user" },
  { name: "useAsyncData", path: "/useAsyncData" },
  { name: "product", path: "/product" },
  { name: "course", path: "/courses" },
  { name: "vote", path: "/vote" },
];

const isLoading = ref(false);

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:start", () => {
  isLoading.value = true;
});
nuxtApp.hook("page:finish", () => {
  isLoading.value = false;
});
</script>

<style scoped></style>
