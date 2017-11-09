class Api::V1::DaysController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    itinerary = Itinerary.find(params[:itinerary_id])
    render json: itinerary.days
  end

  def create
    day = Day.new(day_params)
    itineary = Itinerary.find(params[:itinerary_id])

    day.itinerary = itinerary
    day.user = current_user

    if day.save
      render json: {message: "Day saved"}
    else
      render json: {message: "Day not saved"}
    end
  end

  def day_params
    params.permit(:notes)
  end
end
