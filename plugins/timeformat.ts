export default defineNuxtPlugin((nuxtApp) => {
    return{
        provide:{
              //轉換時間格式 為 2021-01-01 00:00:00 
                timeFormat : (time:Date) => {
                    const date = new Date(time)
                    const year = date.getFullYear()
                    const month = date.getMonth() + 1
                    const day = date.getDate()

                    return `${year}-${month}-${day}`
                },
            }
        }
  
})