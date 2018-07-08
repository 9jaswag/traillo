class SearchController < ApplicationController
  def user
    render json: [] if params[:q].nil?
    user = User.search params[:q]
    render json: user if user
  end
end
