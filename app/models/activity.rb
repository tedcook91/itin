class Activity < ApplicationRecord
  belongs_to :itinerary


  # validates :name, length: {within: 3..15}
  # validates :location, length: {within: 3..15}
  # validates :type, length: {within: 3..8}
  # validates :notes, length: (maximum: 40)

  # validates_presence_of :location, :event, :notes
end
