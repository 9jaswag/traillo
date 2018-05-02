class Board < ApplicationRecord
  before_create :set_uid
  validates :name, presence: true
  validates :is_private, inclusion: [true, false]
  validates_presence_of :bg_img, { :unless => :bg_color?, message: 'Background image or colour must be provided' }
  has_many :user_boards
  has_many :users, through: :user_boards

  private
  def set_uid
    self.uid = SecureRandom.base64(6).gsub("/","_").gsub(/=+$/,"")
  end
end
