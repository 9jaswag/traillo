class Card < ApplicationRecord
  validates :name, presence: true
  belongs_to :list
  has_many :checklists, dependent: :destroy
end
