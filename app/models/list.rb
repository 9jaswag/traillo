class List < ApplicationRecord
  validates :name, presence: true
  belongs_to :board
  has_many :cards, dependent: :destroy
end
