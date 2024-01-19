<script setup>

</script>

<template>
  <div class="grid-container">
    <a href="/Chinesisch">
      <img src="../assets/icons/Chinesische-Küche.jpg">
      <h3>Chinesische Küche</h3>
    </a>
    <a href="/Japanisch">
      <img src="../assets/icons/Japanische%20Küche.jpeg">
      <h3>Japanische Küche</h3>
    </a>
    <a href="/Koreanisch">
      <img src="../assets/icons/Koreanische-Küche.jpg">
      <h3>Koreanische Küche</h3>
    </a>
    <a href="/Indisch">
      <img src="../assets/icons/Indische-Küche.jpg">
      <h3>Indische Küche</h3>
    </a>
    <a href="/Deutsch">
      <img src="../assets/icons/Deutsche-Küche.jpeg">
      <h3>Deutsche Küche</h3>
    </a>
    <a href="/Italienisch">
      <img src="../assets/icons/Italienische-Küche.jpeg">
      <h3>Italienische Küche</h3>
    </a>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  position: fixed;
  gap: 25px;
  grid-template-columns: 20% 20% 20%;
  grid-template-rows: 35% 35%;
  justify-content: center;
  align-content: center;
  height: calc(100% - 50px);
}

img {
  width: 100%;
  object-fit: contain;
}

a {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  border: 2px solid black;
}

.grid-container :hover {
  border: 3px solid var(--quartary);
}

</style>