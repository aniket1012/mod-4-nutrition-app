require 'test_helper'

class UserMealsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_meal = user_meals(:one)
  end

  test "should get index" do
    get user_meals_url, as: :json
    assert_response :success
  end

  test "should create user_meal" do
    assert_difference('UserMeal.count') do
      post user_meals_url, params: { user_meal: { meal_id: @user_meal.meal_id, user_id: @user_meal.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show user_meal" do
    get user_meal_url(@user_meal), as: :json
    assert_response :success
  end

  test "should update user_meal" do
    patch user_meal_url(@user_meal), params: { user_meal: { meal_id: @user_meal.meal_id, user_id: @user_meal.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy user_meal" do
    assert_difference('UserMeal.count', -1) do
      delete user_meal_url(@user_meal), as: :json
    end

    assert_response 204
  end
end
