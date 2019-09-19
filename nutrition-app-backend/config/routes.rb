Rails.application.routes.draw do
  resources :meal_ingredients
  resources :user_meals
  resources :ingredients
  resources :meals
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
