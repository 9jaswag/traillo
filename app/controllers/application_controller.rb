class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  include ExceptionHandler

  # called before every action on controllers
  before_action :authorize_request
  attr_reader :current_user

  private

  def authorize_request
    @current_user = AuthorizeRequest.new(request.headers).call[:user]
  end
end
