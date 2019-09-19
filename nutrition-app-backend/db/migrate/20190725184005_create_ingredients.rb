class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :calories
      t.integer :carbohydrates
      t.integer :protein
      t.integer :fat

      t.timestamps
    end
  end
end
