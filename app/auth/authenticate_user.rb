require 'json_web_token'

class AuthenticateUser
  def initialize(email, password)
    @email = email
    @password = password
  end

  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private
  attr_reader :email, :password

  def user
    user ||= User.find_by(email: email)
    raise(ExceptionHandler::AuthenticationError, 'Account not activated. Check your email for activation link!') if user && !user.activated
    raise(ExceptionHandler::AuthenticationError, 'Invalid login credentials') if user.nil?

    return user if user && user.authenticate(password)
  end
end
