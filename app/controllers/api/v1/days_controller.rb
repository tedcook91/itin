class Api::V1::DaysController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    itinerary = Itinerary.find(params[:itinerary_id])
    render json: itinerary.days
  end

  def create
    day = Day.new(day_params)
    # itinerary = Itinerary.find(params[:itinerary_id])

    day.itinerary = itinerary


    if @day.save
      render json: {message: "Day saved"}
    else
      render json: {message: "Day not saved"}
    end
  end

  # def show
  #   activities = @days.activities
  #
  #   render json: Day.find(params[:id])
  # end

  def day_params
    params.permit(:date, :activity, :day_id)
  end
end
