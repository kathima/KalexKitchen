<script setup>
import {sidebarStore} from "@/store/sidebarStore.js";

const store = sidebarStore();

</script>

<template>
  <header>
    <div></div>
    <div>
      <a href="/">
        <h1>Kalex Kochbuch</h1>
      </a>
    </div>
    <div>
      <button class="sidebar-button" @click="store.handleSidebar()">
        <img v-if="store.collapsed" src="../assets/icons/expand.svg"/>
        <img v-else src="../assets/icons/collapse.svg"/>
      </button>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: var(--quartary);
  height: 50px;
}

.sidebar-button {
  background: var(--quartary);
  border-color: var(--quartary);
  margin-right: 25px;
  height: 25px;
  width: 25px;
}

img {
  scale: 150%;
}

a{
  text-decoration: none;
}
</style>