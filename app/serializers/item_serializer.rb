class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :is_done

  belongs_to :checklist
end
