<script setup>
  import {sidebarStore} from "@/store/sidebarStore.js";

  const store = sidebarStore()

</script>

<template>
  <div class="sidebar" id="mySidebar" :style="{width: store.widthSidebar}">
    <div class="recipe">
      <a href="/">Home</a>
      <br>
      <a href="/Chinesisch">Chinesische Gerichte</a>
      <a href="/Japanisch">Japanische Gerichte</a>
      <a href="/Koreanisch">Koreanische Gerichte</a>
      <a href="/Indisch">Indische Gerichte</a>
      <br>
      <a href="/Deutsch">Deutsche Gerichte</a>
      <br>
      <a href="/Italienisch">Italienische Gerichte</a>
    </div>
    <div class="recipeBottom">
      <a>Favoriten</a>
      <a>Einkaufsliste</a>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%; /* 100% Full-height */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 50px;
  right: 0;
  background-color: var(--secondary);
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
}

/* The sidebar links */
.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidebar a:hover {
  color: var(--quartary);
}

.recipe {
  flex-grow: 3;
}

.recipeBottom {
  flex-grow: 1;
}

</style>