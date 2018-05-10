class Checklist < ApplicationRecord
  validates :name, presence: true

  belongs_to :card
  has_many :items, dependent: :destroy
end
