# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'faker'

user = User.create([{id: 1, provider: "google", uid: "113263435469643238085", first_name: "Ted", last_name: "Cook", email: "edward.w.cook@gmail.com", token: "ya29.GmAABdSfSgCpUF5eNbOZMpmRpMk_1KDEHyiFfcaYXrRtTQ5j6g7Bv3pmCkV8sCdNx4J02l-P6bBzcUY85OxHi5HMbe1ap5HQUzcGF9rUBoz4kZ95fg3IL4eCB8WQLn2gPls"}])

itin1 = Itinerary.create([{id: 1, user_id: 1, name: "First Itinerary", notes: "This is the first itinerary"}])

day1 = Day.create([{id: 1, itinerary_id: 1, date: Date.parse("11-11-2017")}])

day2 = Day.create([{id: 2, itinerary_id: 1, date: Date.parse("11-12-2017")}])

activity1 = Activity.create([{id: 1, day_id: 1, location: "Boston", event: "Dinner", body: "This is dinner in Boston"}])

activity2 = Activity.create([{id: 2, day_id: 1, location: "New York", event: "Lunch", body: "This is lunch in New York"}])

actvity3 = Activity.create ([{id: 3, day_id: 2, location: "DC", event: "Lunch", body: "Eat at Taqueria Nacional"}])

activity4 = Activity.create([{id: 4, day_id: 2, location: "DC", event: "Tourism", body: "See President Trump get peed on by hookers"}])
