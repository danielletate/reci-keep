<template>
  <div class="flex flex-col px-8 pt-5 bg-yellow-300">
    <div class="text-lg hover:underline hover:underline-offset-4">
      <router-link to="/">
        <img
          src="../assets/back-arrow.png"
          class="h-8 hover:transition hover:duration-300 hover:scale-110"
          alt="back-arrow"
        />
      </router-link>
    </div>

    <h1 class="text-gray-900 text-4xl font-bold mt-10 mb-4">
      {{ recipe.title }}
    </h1>
    <p class="text-gray-900">{{ recipe.description }}</p>
    <hr class="my-4 border border-gray-900 opacity-50" />

    <!-- Ingredients -->
    <div class="text-gray-900 bg-yellow-400 opacity-80 p-8">
      <h3 class="text-xl mb-2 font-bold">Ingredients</h3>
      <ul class="space-y-2">
        <li v-for="(ingredient, i) in recipe.ingredients" :key="i">
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <!-- Instructions -->
    <div class="text-gray-900 mb-10">
      <h3 class="font-bold text-3xl mt-8 mb-4">Instructions</h3>
      <ol class="list-decimal space-y-6 ml-4">
        <li v-for="(instruction, i) in recipe.instructions" :key="i">
          {{ instruction }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  // Options API (grabbed recipe data from store)
  computed: {
    recipe() {
      return this.$store.state.recipes.find(
        (recipe) => recipe.slug === this.$route.params.slug
      );
    },
  },
};
</script>
