class AddCategoryToMeal < ActiveRecord::Migration[5.2]
  def change
    add_column :meals, :category, :string
  end
end
