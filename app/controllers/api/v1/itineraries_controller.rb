class Api::V1::ItinerariesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    user_id = params[:id]
    @user = User.find(user_id)

    @itineraries = @user&.itineraries || []
    render json: @itineraries
  end

  def create
    @itinerary = Itinerary.new(itinerary_params)
    @itinerary.user = current_user
  end

  def show
    @itinerary = Itinerary.find(params[:id])

    render json: @itinerary
  end

  def itinerary_params
    params.permit(:user_id, :itinerary_id)
  end
end
