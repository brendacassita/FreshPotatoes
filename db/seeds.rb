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

u1 = User.create(email:'test1@test.com', password:123456, name:'Beyonce', username:'user1', avatar:'https://www.billboard.com/wp-content/uploads/2022/04/beyonce-2009-billboard-1548.jpg', phone:'8018889888', role:'user')
u2 = User.create(email:'test2@test.com', password:123456, name:'Michael Myers', username:'cold_blooded_killa', avatar:'https://pbs.twimg.com/profile_images/1466466892223234053/ihMBEiVB_400x400.jpg', phone:'801777777', role:'admin')
u3 = User.create(email:'ripley@test.com', password:123456, name:'Ellen Ripley', username:'alien_slayer', avatar:'https://i.guim.co.uk/img/media/ef051ec5cc2f1d6c0ff5f18ee7225b04e54fa18e/481_491_2408_1445/master/2408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=68022631661a93655ae2d1066fcf3c26', phone:'801777777', role:'admin')
u4 = User.create(email:'sherlocked@test.com', password:123456, name:'Sherlock Holmes', username:'sherlocked', avatar:'https://media.npr.org/assets/img/2018/06/02/sherlock-1-e20e4d122bb80306472eaf22e07a19969d6fc202-s1100-c50.jpg', phone:'801777777', role:'admin')
u5 = User.create(email:'007@test.com', password:123456, name:'James Bond', username:'007', avatar:'https://static.wikia.nocookie.net/jamesbond/images/d/dc/James_Bond_%28Pierce_Brosnan%29_-_Profile.jpg/revision/latest?cb=20220207082851', phone:'801777777', role:'admin')


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
