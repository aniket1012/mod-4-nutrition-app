class CreateMeals < ActiveRecord::Migration[5.2]
  def change
    create_table :meals do |t|
      t.string :name
      t.integer :calories
      t.integer :carbohydrates
      t.integer :protein
      t.integer :fat

      t.timestamps
    end
  end
end
