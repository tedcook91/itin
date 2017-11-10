class ItinerarySerializer < ActiveModel::Serializer
  attributes :id

  has_many :days

end
