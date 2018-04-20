class User < ApplicationRecord
  attr_accessor :activation_token, :reset_token
  before_save { self.email = email.downcase }
  before_save { self.username = username.downcase }
  before_create :create_activation_digest
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :username, presence: true, length: { maximum: 15 }, uniqueness: true
  validates :name, presence: true
  validates :email, presence: true, length: { maximum: 255 }, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: { minimum: 6 }
  has_secure_password

  class << self
    def new_token
      SecureRandom.urlsafe_base64
    end

    def digest(string)
      cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST : BCrypt::Engine.cost
      BCrypt::Password.create(string, cost: cost)
    end
  end

  def authenticated?(attribute, token)
    digest = send("#{attribute}_digest")
    return false if digest.nil?
    # verify the token matches the digest
    BCrypt::Password.new(digest).is_password?(token)
  end

  def send_activation_email
    UserMailer.account_activation(self).deliver_now
  end

  def send_password_reset_email
    UserMailer.password_reset(self).deliver_now
  end

  def activate
    update_columns(
      activated: true,
      activation_time: Time.zone.now,
      activation_digest: nil
    )
  end

  def create_reset_digest
    self.reset_token = User.new_token
    update_columns(
      reset_digest: User.digest(reset_token),
      reset_time: Time.zone.now
    )
  end

  def send_password_reset_email
    UserMailer.password_reset(self).deliver_now
  end

  def activate_user(token)
    if !self || self.activated || !self.authenticated?(:activation, token)
      raise(
        ExceptionHandler::AuthenticationError,
        'Account activation failed!'
      )
    end
    self.activate
    return true
  end

  private
  def create_activation_digest
    self.activation_token = User.new_token
    self.activation_digest = User.digest(self.activation_token)
  end
end
