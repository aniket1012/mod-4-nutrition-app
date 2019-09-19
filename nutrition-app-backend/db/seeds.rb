# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

aniket = User.create(user_name: "Aniket", email: "ani@gmail.com", age: 26, height: 71, weight: 175, life_style:"light activity", gender:"male")

eggs = Ingredient.create(name: "eggs" , calories: 91 , carbohydrates: 1 , protein: 6 , fat: 7)
avacado = Ingredient.create(name: "avacado" , calories: 234 , carbohydrates: 12 , protein: 3 , fat: 21)
banana = Ingredient.create(name: "banana" , calories: 105 , carbohydrates: 27 , protein: 2 , fat: 1)
grilled_chicken = Ingredient.create(name: "grilled chicken", calories: 126 , carbohydrates: 0 , protein: 26 , fat: 3)
broccoli = Ingredient.create(name: "broccoli" , calories: 50 , carbohydrates: 10 , protein: 5 , fat: 1)
rice = Ingredient.create(name: "rice" , calories: 206 , carbohydrates: 45 , protein: 4 , fat: 1)

lunch = Meal.create(name: "Chicken, Broccoli, & Rice", calories: 382, carbohydrates: 55, protein: 35, fat: 5, category: "lunch")
breakfest = Meal.create(name: "Avacado & Eggs", calories: 325 , carbohydrates: 15, protein: 18, fat: 28, category: "breakfest")
dinner = Meal.create(name: "Chicken & Broccoli", calories: 180, carbohydrates: 15, protein: 30, fat: 5, category: "dinner")

aniket_meal = UserMeal.create(user_id: aniket.id, meal_id:lunch.id)
aniket_mea = UserMeal.create(user_id: aniket.id, meal_id:breakfest.id)
aniket_me = UserMeal.create(user_id: aniket.id, meal_id:dinner.id)

puts breakfest
puts breakfest.id


meal_b = MealIngredient.create(meal_id: breakfest.id, ingredient_id: eggs.id)
puts meal_b
meal_br = MealIngredient.create(meal_id: breakfest.id, ingredient_id: avacado.id)
puts meal_br