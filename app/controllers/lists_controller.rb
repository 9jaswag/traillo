class ListsController < ApplicationController
  def create
    board = Board.find_by!(uid: params[:board_id])
    list = board.lists.new(list_params)
    render json: { board: board } if list.save!
  end

  private
  def list_params
    params.permit(:name, :board_id)
  end
end
