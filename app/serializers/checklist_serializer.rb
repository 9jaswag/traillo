class ChecklistSerializer < ActiveModel::Serializer
  attributes :id, :name, :items

  belongs_to :card
  has_many :items

  def items
    object.items.order(:created_at)
  end
end
