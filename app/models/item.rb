class Item < ApplicationRecord
  before_save :set_is_done
  validates :name, presence: true

  belongs_to :checklist

  def set_is_done
    self.is_done = false if self.is_done.nil?
  end
end
