class ListSerializer < ActiveModel::Serializer
  attributes :id, :name, :cards

  belongs_to :board
  has_many :cards

  def cards
    object.cards
  end
end
