class UsersController < ApplicationController
  skip_before_action :authorize_request, only: %i[create login edit update reset]
  def index; end

  def new
    @user = User.new
  end

  def create
    user = User.create!(user_params)
    raise(ActiveRecord::RecordInvalid) unless user.save
    user.send_activation_email
    render json: { message: 'Account created. Please check your email for activation link' }, status: :created
  end

  def show; end

  def edit
    user = User.find_by!(email: params[:email])
    user.activate_user(params[:token])
    render json: {message: 'Account activation complete. Please login!'}
  end

  def update
    user = User.find_by!(email: params[:email])
    user.password_reset_expired?
    user.update!(reset_digest: nil, reset_time: nil) if user.update!(password_reset_params)
    render json: {message: 'Password reset successful. Please login!'}
  end

  def login
    user = AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
    render json: {token: user, message: 'Login successful'}
  end

  def reset
    user = User.find_by!(email: params[:email])
    user.create_reset_digest
    user.send_password_reset_email
    render json: {message: 'Password reset instructions have been sent!'}
  end

  private

  def user_params
    params.permit(:username, :email, :password, :name)
  end

  def auth_params
    params.permit(:email, :password)
  end

  def password_reset_params
    params.permit(:password, :password_confirmation)
  end
end
