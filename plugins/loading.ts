
import VueElementLoading from "vue-element-loading";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueElementLoading', VueElementLoading);
});