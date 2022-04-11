# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Movie.destroy_all
User.destroy_all

u1 = User.create(email:'test1@test.com', password:123456, name:'Beyonce', username:'user1', avatar:'https://static.wikia.nocookie.net/ladygaga/images/2/2e/Beyonc%C3%A9.jpg/revision/latest?cb=20200718185948', phone:'8018889888', role:'user')
u2 = User.create(email:'test2@test.com', password:123456, name:'Michael Meyers', username:'user2', avatar:'https://upload.wikimedia.org/wikipedia/en/e/e9/MichaelMyers2018.jpg', phone:'801777777', role:'admin')

m1 = u1.movies.create(
  name:'Pineapple Express',
  year:'2008', 
  genre:'Comedy', 
  plot:'A process server and his marijuana dealer wind up on the run from hitmen and a corrupt police officer after he witnesses his dealers boss murder a competitor while trying to serve papers on him.',
  runtime:'1h 45m',
  poster:'https://www.imdb.com/title/tt0910936/mediaviewer/rm3325203968/',
  trailer:'https://www.imdb.com/video/vi2729574681?playlistId=tt0910936&ref_=tt_ov_vi')

m2 = u1.movies.create(
  name:'The Interview',
  year:'2014', 
  genre:'Comedy', 
  plot:'Dave Skylark and his producer Aaron Rapaport run the celebrity tabloid show "Skylark Tonight". When they land an interview with a surprise fan, North Korean dictator Jong-Un Kim, they are recruited by the CIA to assassinate him.', 
  runtime:'1h 52m', 
  poster:'https://www.imdb.com/title/tt2788710/mediaviewer/rm2264792576/', 
  trailer:'https://www.imdb.com/video/vi1114222361?playlistId=tt2788710&ref_=tt_ov_vi')

m3 = u2.movies.create(
  name:'National Treasure', 
  year:'2004', 
  genre:'Action', 
  plot:'A historian races to find the legendary Templar Treasure before a team of mercenaries.', 
  runtime:'2h 25m', 
  poster:'https://www.imdb.com/title/tt0368891/mediaviewer/rm751471616/', 
  trailer:'https://www.imdb.com/video/vi3890151705?playlistId=tt0368891&ref_=tt_ov_vi')

m4 = u2.movies.create(
  name:'Knives Out', 
  year:'2019', 
  genre:'Mystery', 
  plot:'A detective investigates the death of the patriarch of an eccentric, combative family.', 
  runtime:'2h 10m', 
  poster:'https://www.imdb.com/title/tt8946378/mediaviewer/rm2569376769/', 
  trailer:'https://www.imdb.com/video/vi2464857881?playlistId=tt8946378&ref_=tt_ov_vi')

m5 = u1.movies.create(
  name:'Jason and the Argonauts',
  year:'1963',
  genre:'action', 
  plot:'The legendary Greek hero leads a team of intrepid adventurers in a perilous quest for the legendary Golden Fleece.',
  runtime:'1h 44m', 
  poster:'https://www.imdb.com/title/tt0057197/mediaviewer/rm2695511296/?ref_=tt_ov_i', 
  trailer:'https://www.imdb.com/video/vi4187095321/?ref_=tt_vi_i_1')

m6 = u1.movies.create(
  name:'Crazy Rich Asians',
  year:'2018', 
  genre:'comedy',
  plot:'This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriends family.', 
  runtime:'2h 1m', 
  poster:'https://www.imdb.com/title/tt3104988/mediaviewer/rm89476864/', 
  trailer:'https://www.youtube.com/watch?v=ZQ-YX-5bAs0')

m7 = u1.movies.create(
  name:'Beetlejuice', 
  year:'1988', 
  genre:'Comedy,Horror',
  plot:'The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.', 
  runtime:'1h 32m', 
  poster:'https://www.imdb.com/title/tt0094721/mediaviewer/rm2212181760/?ref_=tt_ov_i', 
  trailer:'https://www.imdb.com/video/vi4170302233?playlistId=tt0094721&ref_=tt_pr_ov_vi')

m8 = u1.movies.create(
  name:'The Crow', 
  year:'1994', 
  genre:'Action,Fantasy', 
  plot:'A man brutally murdered comes back to life as an undead avenger of his and his fiancées murder.', 
  runtime:'1h 42m', 
  poster:'https://www.imdb.com/title/tt0109506/mediaviewer/rm866189824/?ref_=tt_ov_i', 
  trailer:'https://www.imdb.com/video/vi404404249?playlistId=tt0109506&ref_=tt_ov_vi')

m9 = u2.movies.create(
  name:'Labyrinth', 
  year:'1986', 
  genre:'Adventure,Fantasy', 
  plot:'Sixteen-year-old Sarah is given thirteen hours to solve a labyrinth and rescue her baby brother Toby when her wish for him to be taken away is granted by the Goblin King Jareth.', 
  runtime:'1h 41m', 
  poster:'https://www.imdb.com/title/tt0091369/mediaviewer/rm2649548544/?ref_=tt_ov_i', 
  trailer:'https://www.imdb.com/video/vi3636961561?playlistId=tt0091369&ref_=tt_ov_vi')

m10 = u2.movies.create(
  name:'Romeo and Juliet' , 
  year:'1996', 
  genre:'Drama,Romance', 
  plot:'Shakespeares famous play is updated to the hip modern suburb of Verona still retaining its original dialogue.', 
  runtime:'2h', 
  poster:'https://www.imdb.com/title/tt0117509/mediaviewer/rm559635712/?ref_=tt_ov_i',  
  trailer:'https://www.imdb.com/video/vi58720537?playlistId=tt0117509&ref_=tt_pr_ov_vi')

m11 = u1.movies.create(
  name:'The Three Amigos!',
  year:'1986', 
  genre:'Comedy', 
  plot:'Three actors accept an invitation to a Mexican village to perform their onscreen bandit fighter roles, unaware that it is the real thing.', 
  runtime:'1h 44m', 
  poster:'https://m.media-amazon.com/images/I/51pC6YFqfqL._AC_.jpg', 
  trailer:'https://www.youtube.com/watch?v=g9OAjqs6dOo')

m12 = u1.movies.create(
  name:'The Neverending Story',
  year:'1984', 
  genre:'Adventure', 
  plot:'A troubled boy dives into a wondrous fantasy world through the pages of a mysterious book.', 
  runtime:'1h 42m', 
  poster:'https://m.media-amazon.com/images/I/710R6Go8u0L._AC_SY679_.jpg', 
  trailer:'https://www.youtube.com/watch?v=UeFni9dOv7c')

m13 = u2.movies.create(
  name:'Earth Girls are Easy', 
  year:'1988', 
  genre:'Comedy', 
  plot:'A Southern California girl befriends three furry aliens after their spaceship lands in her swimming pool.', 
  runtime:'1h 40m', 
  poster:'https://cdn.shopify.com/s/files/1/1416/8662/products/EarthGirlsareeasy_1989_original_film_art_1200x.jpg?v=1606251243', 
  trailer:'https://www.youtube.com/watch?v=3TnO5gz-1Wk')

m14 = u2.movies.create(
  name:'Muppet Treasure Island', 
  year:'1996', 
  genre:'Adventure', 
  plot:'The Muppets twist on the classic tale.', 
  runtime:'1h 39m', 
  poster:'https://m.media-amazon.com/images/I/61ZWo59PYKL._AC_.jpg', 
  trailer:'https://www.youtube.com/watch?v=KLUdKoCganU')

m15 = u1.movies.create(
  name:'Man of Steel', 
  year:'2013', 
  genre:'action', 
  plot:'An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth.', 
  runtime:'2h 23m', 
  poster:'https://www.imdb.com/title/tt0770828/mediaviewer/rm2035131904/?ref_=tt_ov_i', 
  trailer:'https://www.imdb.com/video/vi705668633?playlistId=tt0770828&ref_=tt_ov_vi')

m16 = u1.movies.create(
  name:'What Dreams May Come', 
  year:'1998', 
  genre:'drama', 
  plot:'Chris Nielsen dies in an accident, and enters Heaven. But when he discovers that his beloved wife Annie has killed herself out of grief over the loss, he embarks on an afterlife adventure to reunite with her.', 
  runtime:'1h 53m', 
  poster:'https://www.imdb.com/title/tt0120889/mediaviewer/rm11484160/?ref_=tt_ov_i', 
  trailer:'https://www.imdb.com/video/vi4110156057?playlistId=tt0120889&ref_=tt_pr_ov_vi')

m17 = u1.movies.create(
  name:'Gladiator', 
  year:'2000', 
  genre:'action', 
  plot:'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', 
  runtime:'2h 35m', 
  poster:'https://www.imdb.com/title/tt0172495/mediaviewer/rm2442542592/?ref_=tt_ov_i', 
  trailer:'https://www.imdb.com/video/vi2628367897?playlistId=tt0172495&ref_=tt_pr_ov_vi')

m18 = u1.movies.create(
  name:'The Count of Monte Cristo',
  year:'2002',
  genre:'action',
  plot:'A young man, falsely imprisoned by his jealous "friend", escapes and uses a hidden treasure to exact his revenge.',
  runtime:'2h 11m',
  poster:'https://www.imdb.com/title/tt0245844/mediaviewer/rm3545959936/?ref_=tt_ov_i')

Review.create(
  rating:5,
  watched:'false',
  user_id:1,
  movie_id:1,
)

Review.create(
  rating:3,
  watched:'true',
  user_id:1,
  movie_id:1,
)

Review.create(
  rating:3,
  watched:'false',
  user_id:2,
  movie_id:2,
)

Review.create(
  rating:4,
  watched:'true',
  user_id:2,
  movie_id:2,
)

Cast.create(
  headshot:'https://m.media-amazon.com/images/M/MV5BMTQ0NjgzNzcwNV5BMl5BanBnXkFtZTcwODExMDYxOQ@@._V1_.jpg',
  name:'Seth Rogen',
)

Cast.create(
  headshot:'https://m.media-amazon.com/images/M/MV5BMjA4MzMzNDM5MF5BMl5BanBnXkFtZTgwMjQ0MDk0NDM@._V1_.jpg',
  name:'James Franco',
)


puts "Movies: #{Movie.all.length}"
puts "Reviews: #{Review.all.length}"
puts "Cast: #{Cast.all.length}"
