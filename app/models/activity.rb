class Activity < ApplicationRecord
  belongs_to :itinerary



  validates :location, length: {within: 3..15}
  validates :event, length: {within: 3..15}
  validates :body, length: {maximum: 50}
  validates :day, numericality: { only_integer: true }
  
  validates_presence_of :location, :event, :body, :day
end
