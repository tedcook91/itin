class Api::V1::ActivitiesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    day = Day.find(params[:day_id])
    render json: day.activities
  end

  def create
    activity = Activity.new(activity_params)
    day = Day.find(params[:day_id])

    activity.day = day
    activity.user = current_user

    if activity.save
      render json: {message: "Activity saved"}
    else
      render json: {message: "Activity not saved"}
    end

  def day_params
    params.permit(:location,:type,:notes)
  end
end
