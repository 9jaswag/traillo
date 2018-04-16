class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.create!(user_params)
    raise(ActiveRecord::RecordInvalid) unless user.save
    user.send_activation_email
  end

  def show; end

  def edit
    @user = User.find_by!(email: params[:email])
    @user.activate_user(params[:token])
  end

  def login; end

  private

  def user_params
    params.permit(:username, :email, :password, :first_name, :last_name)
  end
end
