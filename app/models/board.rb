class Board < ApplicationRecord
  before_create :set_uid

  validates :name, presence: true
  # validates :uid, presence: true, uniqueness: true
  validates :is_private, presence: true
  validates_presence_of :bg_img, :unless => :bg_color?

  private
  def set_uid
    self.uid = SecureRandom.base64(8).gsub("/","_").gsub(/=+$/,"")
  end
end
