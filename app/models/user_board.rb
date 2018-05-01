class UserBoard < ApplicationRecord
  belongs_to :user
  belongs_to :board
  validates :user, presence: true
  validates :board, presence: true
end
