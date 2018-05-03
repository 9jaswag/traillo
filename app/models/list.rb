class List < ApplicationRecord
  validates :name, presence: true
  belongs_to :board
end
