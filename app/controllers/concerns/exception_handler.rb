module ExceptionHandler
  extend ActiveSupport::Concern

  # Define custom error subclasses - rescue catches `StandardErrors`
  class AuthenticationError < StandardError; end
  class MissingToken < StandardError; end
  class InvalidToken < StandardError; end
  class BadRequest < StandardError; end
  class ExpiredSignature < StandardError; end
  class DecodeError < StandardError; end

  included do
    # Define custom handlers
    rescue_from ActiveRecord::RecordInvalid, with: :four_twenty_two
    rescue_from ExceptionHandler::AuthenticationError, with: :unauthorized_request
    rescue_from ExceptionHandler::MissingToken, with: :four_twenty_two
    rescue_from ExceptionHandler::InvalidToken, with: :four_twenty_two
    rescue_from ExceptionHandler::BadRequest, with: :four_zero_zero
    rescue_from ExceptionHandler::ExpiredSignature, with: :four_nine_eight
    rescue_from ExceptionHandler::DecodeError, with: :unauthorized_request
    rescue_from ActiveRecord::RecordNotUnique, with: :four_zero_nine

    rescue_from ActiveRecord::RecordNotFound do |e|
      render json: { message: e.message }, status: :not_found
    end
  end

  private

  # JSON response with message; Status code 422 - unprocessable entity
  def four_twenty_two(e)
    render json: { message: e.message }, status: :unprocessable_entity
  end

  # JSON response with message; Status code 401 - Unauthorized
  def unauthorized_request(e)
    render json: { message: e.message }, status: :unauthorized
  end

  # JSON response with message; Status code 400 - Bad request
  def four_zero_zero(e)
    render json: { message: e.message }, status: :bad
  end

  # JSON response with message; Status code 498 - Expired token
  def four_nine_eight(e)
    render json: { message: e.message }, status: :invalid_token
  end

  # JSON response with message; Status code 409 - Conflict
  def four_zero_nine(e)
    render json: { message: e.message }, status: :conflict
  end
end
