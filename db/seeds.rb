# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
100.times do |n|
  User.create!(
  name:Faker::Name.name,
  email:Faker::Internet.email,
  phone: Faker::PhoneNumber.cell_phone,
  birthday: Faker::Date.between(30.year.ago, 20.year.ago),
  gender: rand(2) == 1 ? true : false,
  city: Faker::Address.city,
  country: Faker::Address.country,
  address: Faker::Address.street_address,
  intro:  Faker::Lorem.paragraph(10))
end