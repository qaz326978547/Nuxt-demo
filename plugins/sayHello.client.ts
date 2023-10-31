export default defineNuxtPlugin((nuxtApp) => {
    return{
        provide:{
           sayHello:(name:string) => `Hello ${name}`
        }
    }

})