class Activity < ApplicationRecord
  belongs_to :day



  validates :location, length: {within: 3..15}
  validates :event, length: {within: 3..15}
  validates :body, length: {maximum: 50}

  validates_presence_of :location, :event, :body
end
