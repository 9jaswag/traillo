class IndexController < ApplicationController
  skip_before_action :authorize_request
  def index; end
end
