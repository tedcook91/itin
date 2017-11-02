class Day < ApplicationRecord
  belongs_to :itinerary
  has_many :activities

  validates_presence_of :user, :activity
end
