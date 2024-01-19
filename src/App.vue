<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
</script>

<template>
  <HeaderComponent/>
  <SidebarComponent/>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
</style>
