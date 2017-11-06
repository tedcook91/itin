class Api::V1::ActivitiesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    @activity = Activity.find(params[:itinerary_id])

    render json: @activity
  end

  # def index
  #   itinerary = Itinerary.find(params[:itinerary_id])
  #   render json: itinerary.activities
  #   binding.pry
  # end



  def create
    activity = Activity.new(activity_params)
    itinerary = Itinerary.find(params[:itinerary_id])

    activity.itinerary = itinerary
    activity.user = current_user
  end

  def activity_params
    params.permit(:location,:type,:body)
  end
end
