class Itinerary < ApplicationRecord
  belongs_to :user
  has_many :days

  validates :name, length: {within: 3..20}
  validates :notes, length: {maximum: 40}

  validates_presence_of :user
end
