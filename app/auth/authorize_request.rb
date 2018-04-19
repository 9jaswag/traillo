require 'json_web_token'

class AuthorizeRequest
  def initialize(headers = {})
    @headers = headers
  end

  # Service entry point - return valid user object
  def call
    {
      user: user
    }
  end

  private

  attr_reader :headers

  def user
    # check if user is in the database
    # memoize user object
    @user = User.find(decoded_token[:user_id]) if decoded_token
  rescue ActiveRecord::RecordNotFound => e
    # raise custom error
    raise(ExceptionHandler::InvalidToken, ("Invalid token #{e.message}"))
  end

  # decode auth token
  def decoded_token
    @decoded_token = JsonWebToken.decode(http_auth_header)
  end

  # check for token in `Authorization` header
  def http_auth_header
    if headers['Authorization'].present?
      return headers['Authorization'].split(' ').last
    end
    raise(ExceptionHandler::MissingToken, 'Missing token')
  end
end
