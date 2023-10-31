export default defineEventHandler((event) => {
    console.log(event.node.req.url); //將收到的請求的url印出來
});