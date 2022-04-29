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

movies_array = [414906, 634649, 799876, 508947, 335787, 675353, 406759, 294793, 823625, 568124, 919689, 696806, 833425, 760926, 585083, 818750, 580489, 524434, 774825, 338953, 799876, 453395, 639933, 810693, 767825, 522444, 626735, 760104, 545611, 361743, 671043, 818397, 738652, 592695, 820446, 751237, 648579, 778814, 745881, 635731]
### OUR PICKS

pop_movies_array = [611291, 372058, 496243, 155, 556574, 27205, 1891, 324857, 122, 680, 550, 603, 98, 105, 313106, 207, 274, 348, 522518, 4348]

[]

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

100.times do
  Review.create(
    rating: Faker::Number.between(from: 1, to: 5),
    watched: 'true',
    comment: Faker::ChuckNorris.fact,
    user_id: Faker::Number.between(from: 1, to: 5),
    movie_id: pop_movies_array.sample
  )
  end

  100.times do
  Review.create(
    rating: Faker::Number.between(from: 1, to: 5),
    watched: 'false',
    comment: Faker::ChuckNorris.fact,
    user_id: Faker::Number.between(from: 1, to: 5),
    movie_id: pop_movies_array.sample
  )
  end


##### PUTS #####

puts "Reviews: #{Review.all.length}"
