<template>
    <div>
        <h1>Product</h1>
        <div class="grid grid-cols-3 gap-4">
            <div v-for="product in products" :key="product.id" class="bg-gray-100 p-4">
                <nuxt-link :to="`/product/${product.id}`">
                    <img :src="product.imageUrl" alt="" class="w-full object-contain">
                    <h2 class="text-xl font-bold">{{ product.name }}</h2>
                    <p class="text-xl font-bold">${{ $currency(product.price) }}</p>
                </nuxt-link>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

const products = [
    {
        id: 1,
        name: 'Mazda 3',
        price: 990000,
        imageUrl: 'https://autos.yahoo.com.tw/p/r/w880/car-trim/August2023/335734f756debbebce29ee038a3ec746.png'
    },
    {
        id: 2,
        name: 'Corolla Altis',
        price: 778000,
        imageUrl: 'https://toyotamakati.com.ph/wp-content/uploads/2020/08/altis1.jpg'
    },
    {
        id: 3,
        name: 'MG HS 2.0T',
        price: 1006000,
        imageUrl: 'https://autos.yahoo.com.tw/p/r/w880/car-trim/July2022/e07454adb5e0131144c39118de8ab90a.jpeg'
    }
]


</script>