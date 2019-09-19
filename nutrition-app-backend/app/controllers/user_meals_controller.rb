class UserMealsController < ApplicationController
  before_action :set_user_meal, only: [:show, :update, :destroy]

  # GET /user_meals
  def index
    @user_meals = UserMeal.all

    render json: @user_meals
  end

  # GET /user_meals/1
  def show
    render json: @user_meal
  end

  # POST /user_meals
  def create
    @user_meal = UserMeal.new(user_meal_params)

    if @user_meal.save
      render json: @user_meal, status: :created, location: @user_meal
    else
      render json: @user_meal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_meals/1
  def update
    if @user_meal.update(user_meal_params)
      render json: @user_meal
    else
      render json: @user_meal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_meals/1
  def destroy
    @user_meal.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_meal
      @user_meal = UserMeal.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_meal_params
      params.require(:user_meal).permit(:user_id, :meal_id)
    end
end
