class Api::V1::ActivitiesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]
  # protect_from_forgery unless: -> { request.format.json? }

  def index
    # itinerary = Itinerary.find(params[:itinerary_id])
    render json: Activity.all
  end

  def create
    body = JSON.parse(request.body.read)
    @activity = Activity.new(body)


    activity.save

  end

  # def activity_params
  #   params.permit(:location,:event,:body,:activity)
  # end
end
