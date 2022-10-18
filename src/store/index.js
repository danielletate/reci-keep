import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'veggie-pizza',
        title: 'Veggie Pizza',
        description: 'A mouthwatering vegetarian pizza featuring fresh veggies, gooey cheese, and marinara sauce',
        ingredients: [
          '1 pound store-bought pizza dough',
          '1 cup homemade marinara sauce',
          '2 cups baby spinach',
          '½ cup jarred or canned artichoke, cut into 1” pieces',
          '½ cup red onion, cut into thin wedges',
          '½ cup halved cherry tomatoes',
          '½ cup pitted Kalamata olives, halved lengthwise',
          'Optional garnishes: Fresh basil (small leaves or torn), red pepper flakes and/or finely grated Parmesan cheese'
        ],
        instructions: [
          'Preheat the oven to 500 degrees Fahrenheit with a rack in the upper third of the oven. If you’re using a baking stone or baking steel, place it on the upper rack. Prepare dough through step 5.',
          'Spread pizza sauce evenly over the two pizzas, leaving about 1 inch bare around the edges. Evenly distribute the spinach on top of the sauce, followed by the cheese (use all three cups if you want a cheesy pizza as shown here).',
          'Top the pizzas with artichoke, bell pepper, red onion, tomatoes, olives and almonds (if using).',
          'Bake pizzas individually on the top rack until the crust is golden and the cheese is golden and bubbly, about 10 to 12 minutes (or significantly less, if you’re using a baking stone/steel—keep an eye on it).',
          'Transfer pizzas to a cutting board and sprinkle with with fresh basil, red pepper flakes and Parmesan, if using. Slice and serve! Leftover pizza keeps well in the refrigerator for 4 days, or for several months in the freezer.'
        ]
      },
      {
        slug: 'thai-green-tofu-curry',
        title: 'Thai green tofu curry',
        description: 'This authentic Vegan Green Curry with Tofu and Vegetables is rich, creamy and luscious with bold spicy flavors, and so easy to make in under 30 minutes.',
        ingredients: [
         '2 tbsp avocado or coconut oil',
         '1 block tofu, cut into cubes',
         '1 medium onion, chopped',
         '2 garlic cloves, chopped',
         '1 med zucchini, chopped',
         '1/2 red pepper',
         '2 tbsp green curry paste',
         '14oz can full-fat coconut milk',
         '1 tbsp coconut sugar',
         '2 tbsp soy sauce',
         'a squeeze of lime juice'
        ],
        instructions: [
          'Heat oil in a large skillet over medium heat. Add the tofu and cook on each side for 1-2 minutes until crispy and golden brown.',
          'Transfer the tofu to a bowl then heat the remaining 1 tbsp of avocado oil in the skillet.',
          'Add the onion and garlic and let cook for 2 minutes. Then add the zucchini and red pepper and let cook for another 2-3 minutes.',
          'Add remainder of the ingredients and mix everything together until well combined. Add back the tofu and mix.',
          'Taste and adjust seasoning if needed, then remove from heat and serve immediately. '
        ]
      }
    ]
  },
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes.push(recipe)
    }
  }
})