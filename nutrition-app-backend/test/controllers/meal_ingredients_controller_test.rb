require 'test_helper'

class MealIngredientsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @meal_ingredient = meal_ingredients(:one)
  end

  test "should get index" do
    get meal_ingredients_url, as: :json
    assert_response :success
  end

  test "should create meal_ingredient" do
    assert_difference('MealIngredient.count') do
      post meal_ingredients_url, params: { meal_ingredient: { ingedient_id: @meal_ingredient.ingedient_id, meal_id: @meal_ingredient.meal_id } }, as: :json
    end

    assert_response 201
  end

  test "should show meal_ingredient" do
    get meal_ingredient_url(@meal_ingredient), as: :json
    assert_response :success
  end

  test "should update meal_ingredient" do
    patch meal_ingredient_url(@meal_ingredient), params: { meal_ingredient: { ingedient_id: @meal_ingredient.ingedient_id, meal_id: @meal_ingredient.meal_id } }, as: :json
    assert_response 200
  end

  test "should destroy meal_ingredient" do
    assert_difference('MealIngredient.count', -1) do
      delete meal_ingredient_url(@meal_ingredient), as: :json
    end

    assert_response 204
  end
end
