class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :due_date

  belongs_to :list
end
