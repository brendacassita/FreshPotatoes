# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Movie.destroy_all
User.destroy_all

########## USERS ##########

u1 = User.create(email:'test1@test.com', password:123456, name:'Beyonce', username:'user1', avatar:'', phone:'8018889888', role:'user')
u2 = User.create(email:'test2@test.com', password:123456, name:'Michael Meyers', username:'user2', avatar:'', phone:'801777777', role:'admin')
u3 = User.create(email:'ripley@test.com', password:123456, name:'Ellen Ripley', username:'alien_slayer', avatar:'', phone:'801777777', role:'admin')
u4 = User.create(email:'sherlocked@test.com', password:123456, name:'Sherlock Holmes', username:'sherlocked', avatar:'h', phone:'801777777', role:'admin')
u5 = User.create(email:'007@test.com', password:123456, name:'James Bond', username:'007', avatar:'', phone:'801777777', role:'admin')


########## REVIEWS ##########

movies_array = [414906, 634649, 799876, 508947, 606402, 675353, 406759, 294793, 919689, 568124, 823625, 340553, 335787, 696806, 833425, 676705, 760926, 760868, 585083, 928381]

100.times do
Review.create(
  rating: Faker::Number.between(from: 1, to: 5),
  watched: 'true',
  comment: Faker::ChuckNorris.fact,
  user_id: Faker::Number.between(from: 1, to: 5),
  movie_id: movies_array.sample
)
end

100.times do
Review.create(
  rating: Faker::Number.between(from: 1, to: 5),
  watched: 'false',
  comment: Faker::ChuckNorris.fact,
  user_id: Faker::Number.between(from: 1, to: 5),
  movie_id: movies_array.sample
)
end


##### PUTS #####

puts "Reviews: #{Review.all.length}"
