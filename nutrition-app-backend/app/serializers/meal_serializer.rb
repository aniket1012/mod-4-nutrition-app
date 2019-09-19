class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :calories, :carbohydrates, :protein, :fat, :category, :ingredients
end
