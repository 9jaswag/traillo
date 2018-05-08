class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :due_date, :description, :checklists

  belongs_to :list
  has_many :checklists

  def checklists
    object.checklists
  end
end
