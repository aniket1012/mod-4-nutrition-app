class Meal < ApplicationRecord
    has_many :user_meals
    has_many :users, through: :user_meals
    has_many :meal_ingredients
    has_many :ingredients, through: :meal_ingredients
end
