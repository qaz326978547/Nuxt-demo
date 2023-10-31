<script lang="ts" setup></script>

<template>
  <div>
    <header class=" flex">
      <nuxt-link active-class="bg-black text-white" class=" px-6 text-blue-600" to="/">Home</nuxt-link>
      <nuxt-link active-class="bg-black text-white" class=" px-6 text-blue-600" to="/about">About</nuxt-link>
      <nuxt-link active-class="bg-black text-white" class=" px-6 text-blue-600" to="/user">User</nuxt-link>
      <nuxt-link active-class="bg-black text-white" target="_blank" class=" px-6 text-blue-600 "
        to="/useAsyncData">useAsyncData</nuxt-link>
    </header>
    <slot />

    <footer>
      <p>&copy; 2023</p>
    </footer>
  </div>
</template>

<style scoped></style>
