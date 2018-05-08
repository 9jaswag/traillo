class CardsController < ApplicationController
  def create
    list = List.find(params[:list_id])
    card = list.cards.new(card_params)
    render json: card, status: :created if card.save!
  end

  def show
    card = Card.find(params[:id])
    render json: card
  end

  def update
    card = Card.find(params[:id])
    card.update!(update_params)
    render json: card, status: :ok
  end

  private
  def card_params
    params.permit(:name, :list_id)
  end

  def update_params
    params.permit(:description)
  end
end
