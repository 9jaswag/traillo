class ChecklistSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :card
end
