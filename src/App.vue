<template>
  <div id="app">
    <Header />
    <MainSection />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/HeaderSection.vue'
import MainSection from './components/MainSection.vue'
import Footer from './components/FooterSection.vue'
</script>

<style>
body {
  font-family: 'PretendardFont', sans-serif; /* Pretendard 폰트 */
  min-height: 100vh;
}
</style>
