class Board < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :is_private, presence: true
  validates_presence_of :bg_img, :unless => :bg_color?
end
