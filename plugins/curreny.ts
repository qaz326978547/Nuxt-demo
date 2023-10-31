export default defineNuxtPlugin((nuxtApp) => {
    return{
        provide:{
            //轉換貨幣格式
            currency : (num:number) => num.toLocaleString(),
        }
    }
})
