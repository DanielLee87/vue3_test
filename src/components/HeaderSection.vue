<template>
  <header class="sticky top-0 z-50 bg-white text-black p-4 flex justify-between items-center sm:px-3 md:px-6 lg:px-10 w-full">
    <a href="#home">
      <img src="../assets/logo.svg" class="logo sm:h-6 md:h-10 cursor-pointer" alt="en_media logo">
    </a>

    <!-- 햄버거 버튼 (모바일용) -->
    <button v-if="!isMenuOpen" @click="toggleMenu" class="sm:block md:hidden lg:hidden focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16"></path>
      </svg>
    </button>

    <!-- 네비게이션 메뉴 (데스크탑용) -->
    <nav class="hidden md:block lg:block">
      <ul class="flex space-x-6">
        <li><a href="#home" @click="logClick('Home')" class="hover:font-bold">Home</a></li>
        <li><a href="#about" @click="logClick('About')" class="hover:font-bold">About</a></li>
        <li><a href="#contact" @click="logClick('Contact')" class="hover:font-bold">Contact</a></li>
      </ul>
    </nav>

    <!-- 팝업 네비게이션 메뉴 (모바일용) -->
    <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-8 rounded-lg space-y-4 w-4/5 h-3/5 flex flex-col justify-center items-center">
        <button @click="toggleMenu" class="absolute top-4 right-4 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul class="flex flex-col space-y-6 text-xl"> <!-- 모바일 메뉴 글씨 크기 사이즈업 -->
          <li><a href="#home" @click="logClick('Home'); toggleMenu()" class="hover:font-bold">Home</a></li>
          <li><a href="#about" @click="logClick('About'); toggleMenu()" class="hover:font-bold">About</a></li>
          <li><a href="#contact" @click="logClick('Contact'); toggleMenu()" class="hover:font-bold">Contact</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function logClick(menu) {
  console.log(`${menu} 클릭`)
}
</script>

<style scoped>

/* 팝업이 열려 있을 때 햄버거 버튼 숨기기 */
button[hidden] {
  display: none;
}
</style>
