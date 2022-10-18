# == Schema Information
#
# Table name: items
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  price       :float            not null
#  description :text             not null
#  details     :text             not null
#  department  :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Item < ApplicationRecord
    validate :name, :price, :description, :details, :department

    has_one_attached :photo

    has_many :carts
end
