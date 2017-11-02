class Itinerary < ApplicationRecord
  belongs_to :user
  has_many :days

  validates_presence_of :user
end
