class Api::V1::ActivitiesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]
  # protect_from_forgery unless: -> { request.format.json? }

  def index
    itinerary = Itinerary.find(params[:itinerary_id])
    render json: itinerary.activities
  end

  def create

    body = JSON.parse(request.body.read)

    @activity = Activity.new(body)

    if @activity.save
      render json: {message: "Activity saved successfully!"}
    else
      render json: {message: "Activity could not be saved."}
    end
  end

end
