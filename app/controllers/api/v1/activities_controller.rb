class Api::V1::ActivitiesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]
  # protect_from_forgery unless: -> { request.format.json? }

  def index
    # itinerary = Itinerary.find(params[:itinerary_id])
    render json: Activity.all
  end

  def create
    # binding.pry
    activity = Activity.new(activity_params)
    # itinerary = Itinerary.find(params[:itinerary_id])

    activity.save



    # activity = Activity.new(activity_params)
    # itinerary = Itinerary.find(params[:itinerary_id])
    #
    # activity.itinerary = itinerary
  end

  def activity_params
    params.permit(:location,:event,:body, :itinerary_id)
  end
end
