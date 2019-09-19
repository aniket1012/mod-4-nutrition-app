class MealIngredientsController < ApplicationController
  before_action :set_meal_ingredient, only: [:show, :update, :destroy]

  # GET /meal_ingredients
  def index
    @meal_ingredients = MealIngredient.all

    render json: @meal_ingredients
  end

  # GET /meal_ingredients/1
  def show
    render json: @meal_ingredient
  end

  # POST /meal_ingredients
  def create
    @meal_ingredient = MealIngredient.new(meal_ingredient_params)

    if @meal_ingredient.save
      render json: @meal_ingredient, status: :created, location: @meal_ingredient
    else
      render json: @meal_ingredient.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /meal_ingredients/1
  def update
    if @meal_ingredient.update(meal_ingredient_params)
      render json: @meal_ingredient
    else
      render json: @meal_ingredient.errors, status: :unprocessable_entity
    end
  end

  # DELETE /meal_ingredients/1
  def destroy
    @meal_ingredient.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_meal_ingredient
      @meal_ingredient = MealIngredient.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def meal_ingredient_params
      params.require(:meal_ingredient).permit(:meal_id, :ingredient_id)
    end
end
