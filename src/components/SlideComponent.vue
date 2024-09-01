<template>
  <div class="relative">
    <div
      ref="scrollContainer"
      class="flex overflow-x-scroll scrollbar-hidden w-full h-96"
      @mousedown.prevent
      @dragstart.prevent
      @selectstart.prevent
    >
      <div 
        v-for="(slide, index) in slides" 
        :key="index" 
        class="flex-none w-screen bg-cover bg-center h-96 relative"
        :style="{ backgroundImage: `url(${slide.image})` }"
        draggable="false"
      >
        <!-- Title and Content -->
        <div class="absolute inset-0 flex flex-col justify-center text-white p-4 lg:max-w-7xl md:max-w-3xl sm:max-w-auto lg:pl-36 lg:text-left md:pl-36 md:text-left sm:text-center">
          <h1 class="text-4xl font-bold [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]" v-html="slide.title"></h1>
          <p class="mt-2 sm:text-base md:text-lg font-light [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]" v-html="slide.description"></p>
        </div>
      </div>
    </div>
    <button @click="scrollLeft" class="absolute sm:top-3/4 md:top-1/2 left-2 transform -translate-y-1/2 text-white text-5xl font-thin w-16 h-16 leading-16 p-0">&lt;</button>
    <button @click="scrollRight" class="absolute sm:top-3/4 md:top-1/2 right-2 transform -translate-y-1/2 text-white text-5xl font-thin w-16 h-16 leading-16 p-0">&gt;</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Import images from the assets folder
const slides = [
  {
    image: require('../assets/main.jpg'),
    title: 'Lorem ipsum<br>dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur<br>sed do eiusmod tempor incididunt ut<br>labore et dolore magna aliqua.',
  },
  {
    image: require('../assets/img1.jpg'),
    title: 'Lorem ipsum<br>dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur<br>sed do eiusmod tempor incididunt ut<br>labore et dolore magna aliqua.',
  },
  {
    image: require('../assets/img2.jpg'),
    title: 'Lorem ipsum<br>dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur<br>sed do eiusmod tempor incididunt ut<br>labore et dolore magna aliqua.',
  },
  {
    image: require('../assets/img3.jpg'),
    title: 'Lorem ipsum<br>dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur<br>sed do eiusmod tempor incididunt ut<br>labore et dolore magna aliqua.',
  },
  {
    image: require('../assets/img4.jpg'),
    title: 'Lorem ipsum<br>dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur<br>sed do eiusmod tempor incididunt ut<br>labore et dolore magna aliqua.',
  },
]

const scrollContainer = ref(null)
const currentIndex = ref(0)

const scrollLeft = () => {
  if (scrollContainer.value) {
    currentIndex.value -= 1
    if (currentIndex.value < 0) {
      scrollContainer.value.scrollTo({ left: scrollContainer.value.scrollWidth, behavior: 'smooth' })
      currentIndex.value = slides.length - 1
    } else {
      scrollContainer.value.scrollBy({ left: -window.innerWidth, behavior: 'smooth' })
    }
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    currentIndex.value += 1
    if (currentIndex.value >= slides.length) {
      scrollContainer.value.scrollTo({ left: 0, behavior: 'smooth' })
      currentIndex.value = 0
    } else {
      scrollContainer.value.scrollBy({ left: window.innerWidth, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* 드래그 방지 및 텍스트 선택 방지 */
div[draggable="false"], img[draggable="false"] {
  pointer-events: none;
  user-select: none;
}
</style>
