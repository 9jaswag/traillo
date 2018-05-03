class CardsController < ApplicationController
  def create
    list = List.find(params[:list_id])
    card = list.cards.new(card_params)
    render json: list, status: :created if card.save!
  end

  private
  def card_params
    params.permit(:name, :list_id)
  end
end
