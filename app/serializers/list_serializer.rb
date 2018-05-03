class ListSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :board
  has_many :cards
end
