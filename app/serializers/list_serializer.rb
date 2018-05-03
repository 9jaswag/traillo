class ListSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :board
end
