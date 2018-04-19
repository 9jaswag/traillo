class UsersController < ApplicationController
  skip_before_action :authorize_request, only: %i[create login edit update]
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

  def update; end

  def login
    user = AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
    render json: {token: user, message: 'Login successful'}
  end

  private

  def user_params
    params.permit(:username, :email, :password, :name)
  end

  def auth_params
    params.permit(:email, :password)
  end
end
