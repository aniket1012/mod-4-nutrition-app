class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :email
      t.integer :age
      t.integer :height
      t.integer :weight
      t.string :life_style
      t.string :gender

      t.timestamps
    end
  end
end
