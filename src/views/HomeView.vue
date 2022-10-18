<template>
  <div class="bg-yellow-300 flex flex-col items-center p-2">
    <h1 class="text-white text-4xl font-bold mt-10 mb-4 uppercase">
      Reci-keep
    </h1>
    <button
      class="py-3 px-5 text-white border-2 border-yellow-500 font-medium leading-tight cursor-pointer uppercase rounded-md mb-10 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      @click="togglePopup"
    >
      Add new Recipe
    </button>

    <!-- Recipes -->
    <div class="grid grid-cols-2 gap-3 mx-4 rounded-md">
      <div
        class="block p-6 max-w-sm bg-white rounded-md border border-gray-200 shadow-md hover:bg-gray-100"
        v-for="recipe in $store.state.recipes"
        :key="recipe.slug"
      >
        <h2 class="mb-4 text-2xl font-bold tracking-tight text-gray-900">
          {{ recipe.title }}
        </h2>
        <hr class="mb-5" />
        <p class="font-normal text-gray-900">{{ recipe.description }}</p>
        <router-link :to="`/recipe/${recipe.slug}`">
          <button
            class="text-gray-900 py-2.5 px-5 text-sm mt-4 focus:outline-none bg-white rounded-md border border-gray-300 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-in-out"
          >
            View Recipe
          </button></router-link
        >
      </div>
    </div>

    <!-- Add recipe popup -->
    <div
      class="flex items-center justify-center h-screen w-full fixed top-0 bottom-0 bg-black bg-opacity-90 overflow-auto"
      v-if="!popupOpen"
    >
      <!-- Popup content -->
      <div
        class="text-gray-600 bg-white p-8 w-full h-fit max-w-md md:max-w-2xl rounded-md"
      >
        <h2 class="text-3xl font-bold mb-6 uppercase">Add new recipe</h2>

        <form @submit.prevent="addNewRecipe">
          <div class="form-group mb-6">
            <label for="title">Title</label>
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-gray-900 bg-gray-50 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Title"
              v-model="newRecipe.title"
            />
          </div>

          <div class="form-group mb-6">
            <label for="description">Description</label>
            <textarea
              class="form-control block w-full px-3 py-1.5 text-gray-900 bg-gray-50 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none"
              rows="3"
              placeholder="Description"
              v-model="newRecipe.description"
            ></textarea>
          </div>

          <div class="form-group mb-6">
            <label for="ingredients">Ingredients</label>
            <div v-for="i in newRecipe.ingredientRows" :key="i">
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-gray-900 bg-gray-50 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="e.g., '3/4 cup of soy sauce'"
                v-model="newRecipe.ingredients[i - 1]"
              />
            </div>
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 mt-4 text-sm focus:outline-none bg-white rounded-md border border-gray-300 hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-in-out"
              @click="addNewIngredient"
            >
              Add Ingredient
            </button>
          </div>

          <div class="form-group mb-6">
            <label for="instructions">Instructions</label>
            <div v-for="i in newRecipe.instructionRows" :key="i">
              <textarea
                class="form-control block w-full px-3 py-1.5 text-gray-900 bg-gray-50 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="e.g., 'Stirfry onions until translucent'"
                v-model="newRecipe.instructions[i - 1]"
              ></textarea>
            </div>
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 mt-4 text-sm focus:outline-none bg-white rounded-md border border-gray-300 hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-in-out"
              @click="addNewStep"
            >
              Add Step
            </button>
          </div>

          <div class="flex justify-between">
            <!-- Form submit button -->
            <button
              class="py-2.5 px-5 mr-2 mb-2 text-sm focus:outline-none bg-white rounded-md border border-gray-300 hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-in-out"
              type="submit"
            >
              Add Recipe
            </button>

            <!-- Hide recipe popup -->
            <button
              class="py-2.5 px-5 mr-2 mb-2 text-sm focus:outline-none bg-white rounded-md border border-gray-300 hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-in-out"
              type="button"
              @click="togglePopup"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import { ref } from 'vue';
// import { useStore } from 'vuex';
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
    // const store = useStore();

    const togglePopup = () => {
      popupOpen.value = !popupOpen.value;
    };
    const addNewIngredient = () => {
      newRecipe.value.ingredientRows++;
    };

    const addNewStep = () => {
      newRecipe.value.instructionRows++;
    };

    // Submit form
    const addNewRecipe = () => {
      newRecipe.value.slug = newRecipe.value.title
        .toLowerCase()
        .replace(/\s/g, '-');

      if (newRecipe.value.slug == '') {
        alert('Please enter a title!');

        return;
      }

      // Log recipe
      store.commit('ADD_RECIPE', { ...newRecipe.value });
      newRecipe.value = {
        title: '',
        description: '',
        ingredients: [],
        method: [],
        ingredientRows: 1,
        methodRows: 1,
      };
      togglePopup();
    };

    return {
      newRecipe,
      togglePopup,
      popupOpen,
      addNewIngredient,
      addNewStep,
      addNewRecipe,
    };
  },
};
</script>
