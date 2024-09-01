<template>
  <main>
    <section>
      <SlideComponent :cards="cards" />
    </section>
    <section class="grid gap-4 py-10 mx-auto cursor-pointer sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:max-w-7xl md:max-w-3xl sm:max-w-xs w-11/12">
      <CardComponent
        v-for="(card, index) in cards"
        :key="index"
        :image="card.image"
        :title="card.title"
        :description="card.description"
      />
    </section>
  </main>
</template>

<script setup>
import SlideComponent from './SlideComponent.vue'
import CardComponent from './CardComponent.vue'

const cards = [
  {
    image: require('@/assets/img1.jpg'),
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: require('@/assets/img2.jpg'),
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: require('@/assets/img3.jpg'),
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: require('@/assets/img4.jpg'),
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]
</script>
