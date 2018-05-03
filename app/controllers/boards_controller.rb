class BoardsController < ApplicationController

  def index
    boards = @current_user.boards
    render json: { boards: boards }
  end

  def new
    @board = Board.new
  end

  def create
    board = Board.new(board_params)
    board.user_boards.build(user_id: @current_user[:id])
    raise(ActiveRecord::RecordInvalid) unless board.save!
    render json: { board: board }, status: :created
  end

  def show
    board = Board.find_by!(uid: params[:id])
    render json: board
  end

  private
  def board_params
    params.permit(:name, :is_private, :bg_img, :bg_color)
  end
end
