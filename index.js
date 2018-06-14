'use strict'

const FatSecret = require('fatsecret');

const FS_KEY = 'bf069989f34245df90297afd3e557373'
const FS_SECRET = '9a1ec2ec4100450cbf65f3cc94a8373c'

const fatsecret = new FatSecret(FS_KEY, FS_SECRET)

const recipyTypes = [
    'Appetizer',
    'Soup',
    'Main Dish',
    'Side Dish',
    'Baked',
    'Salad and Salad Dressing',
    'Sauce and Condiment',
    'Dessert',
    'Snack',
    'Beverage',
    'Other',
    'Breakfast',
    'Lunch'
]

fatsecret
    .method('foods.search', {
        search_expression: 'egg',
        max_results: 5
    })
    .then(({ foods: { food } }) => {
        console.log(food)
        // console.log(results.page_number)
        // console.log(results.recipe[0])
    })

// fatsecret
//     .method('recipes.search', {
//         recipe_type: 'Breakfast',
//         max_results: 5
//     })
//     .then(({ recipes: results }) => {
//         // console.log(results.max_results)
//         // console.log(results.page_number)
//         // console.log(results.recipe[0])

//         fatsecret.method('recipe.get', { 'recipe_id': results.recipe[0].recipe_id }).then(({ recipe: recipe }) => {
//             console.log(recipe.serving_sizes.serving.calories)
//             console.log(recipe.serving_sizes.serving.fiber)
//             console.log(recipe.serving_sizes.serving.carbohydrate)
//             console.log(recipe.serving_sizes.serving.fat)
//             console.log(recipe.serving_sizes.serving.protein)
//             console.log(recipe.serving_sizes.serving.sugar)
//         })

//     })

