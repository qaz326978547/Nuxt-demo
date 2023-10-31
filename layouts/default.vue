
<template>
  <div>
    <header class=" flex">
      <nuxt-link v-for="route in routeList" active-class="bg-black text-white" class=" px-6 text-blue-600"
        :to="route.path">
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
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'User', path: '/user' },
  { name: 'useAsyncData', path: '/useAsyncData' },
  { name: 'product', path: '/product' },
  { name: 'course', path: '/courses' }
]


</script>

<style scoped></style>
