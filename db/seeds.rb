# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

l = Location.create(name: "New York City")

l.recordings.create(temprature: 32, status:"cloudy")
l.recordings.create(temprature: 34, status:"rainy")
l.recordings.create(temprature: 30, status:"cloudy")
l.recordings.create(temprature: 28, status:"rainy")
l.recordings.create(temprature: 22, status:"sunny")
