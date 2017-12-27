class Api::V1::ActivitiesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]

  def create
    @activity = Activity.new(
      itinerary_id: params[:itinerary_id],
      event: params[:event],
      location: params[:location],
      body: params[:body]
    )
      if @activity.save!
        render_activities(@activity.itinerary)
      else
        render json: { error: @activity.errors.full_messages }, status: :unprocessable_entity
      end
  end

  def index
    @itinerary = Itinerary.find(params[:itinerary_id])
    render_activities(@itinerary)
  end

  private
  def render_activities(itinerary)
    render json: {activities: itinerary.activities}
  end

end
