<script>

export default {
  methods: {
    createNewRecipe() {
      this.$router.push({
        path: "/NeuesRezept"
      })
    }
  },
}

</script>

<template>
  <div>
    <button @click="createNewRecipe()">Neues Rezept</button>
  </div>
</template>

<style scoped>
</style>