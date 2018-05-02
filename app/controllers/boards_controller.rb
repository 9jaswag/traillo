class BoardsController < ApplicationController
  before_action :set_board_access, only: :create

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
    raise(ActiveRecord::RecordInvalid) unless board.save
    render json: { board: board }, status: :created
  end

  private
  def board_params
    params.permit(:name, :is_private, :bg_img, :bg_color)
  end

  def set_board_access
    params[:is_private] == 'Private' ? params[:is_private] = true : params[:is_private] = false
  end
end
