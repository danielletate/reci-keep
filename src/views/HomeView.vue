<template>
  <div class="flex flex-col items-center p-2">
    <h1 class="text-white text-4xl font-bold mt-10 mb-4 uppercase">
      Reci-keep
    </h1>
    <button
      class="py-3 px-5 text-white border-2 border-yellow-500 font-medium leading-tight cursor-pointer uppercase rounded-lg mb-10 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      @click="togglePopup"
    >
      Add new Recipe
    </button>

    <!-- Recipes -->
    <div class="grid grid-cols-2 gap-3 mx-4">
      <div
        class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        v-for="recipe in $store.state.recipes"
        :key="recipe.slug"
      >
        <h2 class="mb-4 text-2xl font-bold tracking-tight text-gray-900">
          {{ recipe.title }}
        </h2>
        <p class="font-normal text-gray-700">{{ recipe.description }}</p>
        <router-link :to="`/recipe/${recipe.slug}`">
          <button
            class="py-2.5 px-5 text-sm mt-4 focus:outline-none bg-white rounded-lg border border-gray-300 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-in-out"
          >
            View Recipe
          </button></router-link
        >
      </div>
    </div>

    <!-- Add recipe popup -->
    <div
      class="flex content-center justify-center fixed top-10 left-0 h-fill w-full"
      v-if="popupOpen"
    >
      <!-- Popup content -->
      <div class="text-gray-600 bg-white p-8 w-full h-fit max-w-md md:max-w-xl">
        <h2 class="text-3xl font-bold mb-6 uppercase">Add new recipe</h2>

        <form @submit.prevent="addNewRecipe">
          <div class="form-group mb-6">
            <label for="title">Title</label>
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-gray-700 bg-gray-50 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Title"
            />
          </div>

          <div class="form-group mb-6">
            <label for="description">Description</label>
            <textarea
              class="form-control block w-full px-3 py-1.5 text-gray-700 bg-gray-50 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              rows="3"
              placeholder="Description"
            ></textarea>
          </div>

          <div class="form-group mb-6">
            <label for="ingredients">Ingredients</label>
            <div v-for="i in newRecipe.ingredientRows" :key="i">
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-gray-700 bg-gray-50 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="e.g., '3/4 cup of soy sauce'"
                v-model="newRecipe.ingredients[i - 1]"
              />
            </div>
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 mt-4 text-sm focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-in-out"
              @click="addNewIngredient"
            >
              Add Ingredient
            </button>
          </div>

          <div class="form-group mb-6">
            <label for="instructions">Instructions</label>
            <div v-for="i in newRecipe.instructionRows" :key="i">
              <textarea
                class="form-control block w-full px-3 py-1.5 text-gray-700 bg-gray-50 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="e.g., 'Stirfry onions until translucent'"
                v-model="newRecipe.instructions[i - 1]"
              ></textarea>
            </div>
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 mt-4 text-sm focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-in-out"
              @click="addNewStep"
            >
              Add Step
            </button>
          </div>

          <!-- Form submit button -->
          <button
            class="py-2.5 px-5 mr-2 mb-2 text-sm focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-in-out"
            type="submit"
          >
            Add Recipe
          </button>

          <!-- Hide recipe popup -->
          <button
            class="py-2.5 px-5 mr-2 mb-2 text-sm focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-in-out"
            type="button"
            @click="togglePopup"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'HomeView',
  setup() {
    const newRecipe = ref({
      title: '',
      description: '',
      ingredients: [],
      instructions: [],
      ingredientRows: 1,
      instructionRows: 1,
    });
    const popupOpen = ref(false);

    const togglePopup = () => {
      popupOpen.value = !popupOpen.value;
    };
    const addNewIngredient = () => {
      newRecipe.value.ingredientRows++;
    };

    const addNewStep = () => {
      newRecipe.value.instructionRows++;
    };

    return {
      newRecipe,
      togglePopup,
      popupOpen,
      addNewIngredient,
      addNewStep,
    };
  },
};
</script>
