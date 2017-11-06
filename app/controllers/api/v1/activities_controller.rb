class Api::V1::ActivitiesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    itinerary = Itinerary.find(params[:itinerary_id])
    render json: itinerary.activities
  end

  def create
    activity = Activity.new(activity_params)
    itinerary = Itinerary.find(params[:itinerary_id])

    activity.itinerary = itinerary
    activity.user = current_user
  end

  def activity_params
    params.permit(:location,:event,:body)
  end
end
