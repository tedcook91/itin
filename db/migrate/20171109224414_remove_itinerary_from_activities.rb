class RemoveItineraryFromActivities < ActiveRecord::Migration[5.1]
  def change
    remove_reference :activities, :itinerary, index: true
  end

end
