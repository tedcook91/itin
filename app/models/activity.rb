class Activity < ApplicationRecord
  belongs_to :day

  validates :name, length: {within: 3..15}
  validates :location, length: {within: 3..15}
  validates :type, length: {within: 3..8}
  validates :notes, length: (maximum: 40)

  validates_presence_of :name, :location, :type, :user
end
