class Checklist < ApplicationRecord
  validates :name, presence: true
  belongs_to :card
end
