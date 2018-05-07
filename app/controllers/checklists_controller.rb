class ChecklistsController < ApplicationController
  def create
    card = Card.find(params[:card_id])
    checklist = card.checklists.new(card_params)
    render json: card, status: :created if checklist.save!
  end

  private
  def card_params
    params.permit(:name, :card_id)
  end
end
