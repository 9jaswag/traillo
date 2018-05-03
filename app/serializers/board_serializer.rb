class BoardSerializer < ActiveModel::Serializer
  attributes :id, :bg_color, :bg_img, :name, :uid

  has_many :lists
end
