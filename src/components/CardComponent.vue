<template>
  <div class="border rounded-md shadow min-h-[420px] relative">
    <img :src="image" alt="Card Image" class="w-full h-48 object-cover rounded-t-md" />
    <h3 class="text-xl font-bold mt-4 mx-3 leading-snug" v-html="title"></h3>
    <p class="text-gray-600 mt-2 mx-3 leading-snug" v-html="description"></p>
    <p class="mx-3 absolute bottom-1 right-0 text-gray-300 font-thin">Read more</p>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
})
</script>
