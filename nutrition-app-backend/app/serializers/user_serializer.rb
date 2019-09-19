class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :age, :height, :weight, :life_style, :gender, :meals, :email
  
end
