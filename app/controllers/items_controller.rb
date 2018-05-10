class ItemsController < ApplicationController
  def create
    checklist = Checklist.find(params[:checklist_id])
    item = checklist.items.new(item_params)
    render json: checklist if item.save!
  end

  def update
    item = Item.find(params[:id])
    item.update!(update_params)
    render json: item, status: :ok
  end

  private

  def item_params
    params.permit(:name, :checklist_id)
  end

  def update_params
    params.permit(:name, :checklist_id, :id, :is_done)
  end
end
