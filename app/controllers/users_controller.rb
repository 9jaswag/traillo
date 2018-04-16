class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.create!(user_params)
    raise(ActiveRecord::RecordInvalid) unless user.save
  end

  def show; end

  def login; end

  private

  def user_params
    params.permit(:username, :email, :password, :first_name, :last_name)
  end
end
