class Activity < ApplicationRecord
  belongs_to :day

  validates_presence_of :location, :type
end
