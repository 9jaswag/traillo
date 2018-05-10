class ItemsController < ApplicationController
  def create
    checklist = Checklist.find(params[:checklist_id])
    item = checklist.items.new(item_params)
    render json: checklist if item.save!
  end

  def item_params
    params.permit(:name, :checklist_id)
  end
end
