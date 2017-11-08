class Api::V1::ItinerariesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]
  # protect_from_forgery unless: -> { request.format.json? }

  def index
    user_id = params[:id]
    @user = User.find(user_id)

    @itineraries = @user&.itineraries || []
    render json: @itineraries
  end

  def create
    body = JSON.parse(request.body.read)
    body.merge!(user: current_user)

    @itinerary = Itinerary.new(body)
    if @itinerary.save
      render json: {message: "Itinerary saved"}
    else
      render json: {message: "Itinerary not saved"}
    end
  end

  def show
    @itinerary = Itinerary.find(params[:itinerary_id])

    activities = @itinerary.activities

    render json: {itinerary: @itinerary, activities: activities}
  end



  # def itinerary_params
  #   params.require(:itinerary).permit(:user_id, :itinName, :itinNotes)
  #   # params.permit(:user_id, :itinName, :itinNotes, :itinerary)
  # end
end
