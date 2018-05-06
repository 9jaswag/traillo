class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :due_date, :description

  belongs_to :list
end
