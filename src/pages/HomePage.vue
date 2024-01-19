<script setup>

import GridTemplate from "@/reusable/GridTemplate.vue";

const homePageData = [
  {
    "title": "Chinesische Küche",
    "link": "/Chinesisch",
    "image": "Chinesische-Küche.jpg",
  },
  {
    "title": "Japanische Küche",
    "link": "/Japanisch",
    "image": "Japanische-Küche.jpeg",
  },
  {
    "title": "Koreanische Küche",
    "link": "/Koreanisch",
    "image": "Koreanische-Küche.jpg",
  },
  {
    "title": "Indische Küche",
    "link": "/Indisch",
    "image": "Indische-Küche.jpg",
  },
  {
    "title": "Deutsche Küche",
    "link": "/Deutsch",
    "image": "Deutsche-Küche.jpeg",
  },
  {
    "title": "Italienische Küche",
    "link": "/Italienisch",
    "image": "Italienische-Küche.jpeg",
  },
]



</script>

<template>
  <GridTemplate :items="homePageData"></GridTemplate>
</template>

<style scoped>

</style>