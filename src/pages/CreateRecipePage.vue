<script setup>
import {ref} from "vue";

const inputTitle = ref("");
const ingredients = ref([{
  quantity: "",
  measurement: "Gramm",
  ingredient: "",

}])
const ingredientsData = ref({
  quantity: "",
      measurement: "Gramm",
    ingredient: "",

})
/*const quantity = ref("");
const measurement = ref("Gramm")
const ingredient = ref("");*/
const description = ref("");

function addInputField() {
  ingredients.value.push(ingredientsData.value)
}
function saveInput() {
  console.log(ingredients.value)
}


</script>

<template>
  <div class="outer-container">
    <form>
      <p>Rezept Name:</p>
      <input v-model="inputTitle" required=true id="title">
      <p>Zutaten:</p>
        <div v-for="ingredient in ingredients">
          <div class="ingredients" key="index">
            <input v-model="ingredient.quantity" type="number" placeholder="Menge" class="quantity" required=true
                   id="quantity">
            <select v-model="ingredient.measurement">
              <option>Gramm</option>
              <option>Kilogramm</option>
              <option>Milliliter</option>
              <option>Liter</option>
              <option>Esslöffel</option>
              <option>Teelöffel</option>
            </select>
            <input v-model="ingredient.ingredient" placeholder="Zutat" class="ingredientInput" required=true
                   id="ingredient">
            <button class="deleteIngredient">-</button>
          </div>
        </div>

      <div/>
      <button  @click="addInputField">+ (mehr Zutaten)</button>
      <p>Beschreibung:</p>
      <textarea v-model="description"></textarea>
      <p>Bilder:</p>
      <p>TODO: Bild Upload</p>
    </form>
    <button @click="saveInput">Speichern</button>
    <button @click="saveInput">Abbrechen</button>
  </div>
</template>

<style scoped>
.outer-container {
  border: 2px solid red;
}

form {
  display: grid;
  grid-template-columns: 20% 40%;
  gap: 25px;
  justify-content: center;
  align-content: center;
}

.ingredients {
  display: flex;
  flex-direction: row;
}

.ingredientInput {
  flex-grow: 1;
}

.quantity {
  width: 100px;
}

.deleteIngredient {
  font-weight: bolder;
  width: 25px;
}
</style>