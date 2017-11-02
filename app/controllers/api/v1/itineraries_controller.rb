class Api::V1::ItinerariesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @itineraries = Itineraries.all
    render json: @itineraries
  end

  def create
    @itinerary = Itinerary.new(itinerary_params)
    @itinerary.user = current_user
  end

  def show
    @itinerary = Itinerary.find(params[:id])
  end

  def itinerary_params
    params.permit (:user_id, :itinerary_id)
  end
end
