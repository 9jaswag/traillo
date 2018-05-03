class BoardSerializer < ActiveModel::Serializer
  attributes :id, :bg_color, :bg_img, :name, :uid, :is_private

  has_many :lists
end
