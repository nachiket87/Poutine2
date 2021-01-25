class Api::V1::LocationsController < ApiController
  before_action :set_location
  before_action :authenticate_user!

  def show
  end

  private

  def set_location
    @location = Location.find(params[:id])
  end
end
