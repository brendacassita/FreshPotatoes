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

u1 = User.create(email:'test1@test.com', password:123456, name:'Beyonce', username:'user1', avatar:'https://static.wikia.nocookie.net/ladygaga/images/2/2e/Beyonc%C3%A9.jpg/revision/latest?cb=20200718185948', phone:'8018889888', role:'user')

u2 = User.create(email:'test2@test.com', password:123456, name:'Michael Meyers', username:'user2', avatar:'https://upload.wikimedia.org/wikipedia/en/e/e9/MichaelMyers2018.jpg', phone:'801777777', role:'admin')

u3 = User.create(email:'test2@test.com', password:123456, name:'Ellen Ripley', username:'alien_slayer', avatar:'https://static.wikia.nocookie.net/avp/images/4/48/Ellen_Ripley.png/revision/latest?cb=20130410133154', phone:'801777777', role:'admin')


########## MOVIES ##########

m1 = u1.movies.create(
  name:'Pineapple Express',
  year:'2008', 
  plot:'A process server and his marijuana dealer wind up on the run from hitmen and a corrupt police officer after he witnesses his dealers boss murder a competitor while trying to serve papers on him.',
  runtime:'1h 45m',
  poster:'https://m.media-amazon.com/images/I/5149l+O+P4L._AC_.jpg',
  trailer:'BWZt4v6b1hI')

m2 = u1.movies.create(
  name:'The Interview',
  year:'2014',  
  plot:'Dave Skylark and his producer Aaron Rapaport run the celebrity tabloid show "Skylark Tonight". When they land an interview with a surprise fan, North Korean dictator Jong-Un Kim, they are recruited by the CIA to assassinate him.', 
  runtime:'1h 52m', 
  poster:'https://m.media-amazon.com/images/I/81R2FrgnfZL._AC_SL1000_.jpg', 
  trailer:'frsvWVEHowg')

m3 = u2.movies.create(
  name:'National Treasure', 
  year:'2004',  
  plot:'A historian races to find the legendary Templar Treasure before a team of mercenaries.', 
  runtime:'2h 25m', 
  poster:'https://m.media-amazon.com/images/I/516L7A1oXZL._AC_.jpg', 
  trailer:'mcf4tXYjaxo')

m4 = u2.movies.create(
  name:'Knives Out', 
  year:'2019', 
  plot:'A detective investigates the death of the patriarch of an eccentric, combative family.', 
  runtime:'2h 10m', 
  poster:'https://m.media-amazon.com/images/I/71enm1zeBvL._AC_SL1500_.jpg', 
  trailer:'xi-1NchUqMA')

m5 = u1.movies.create(
  name:'Jason and the Argonauts',
  year:'1963', 
  plot:'The legendary Greek hero leads a team of intrepid adventurers in a perilous quest for the legendary Golden Fleece.',
  runtime:'1h 44m', 
  poster:'https://m.media-amazon.com/images/I/71J-SyixPsL._AC_SL1000_.jpg', 
  trailer:'C-ZQGRM7GW0')

m6 = u1.movies.create(
  name:'Crazy Rich Asians',
  year:'2018',
  plot:'This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriends family.', 
  runtime:'2h 1m', 
  poster:'https://m.media-amazon.com/images/I/91RSvcwSX+L._AC_SL1500_.jpg', 
  trailer:'ZQ-YX-5bAs0')

m7 = u1.movies.create(
  name:'Beetlejuice', 
  year:'1988',
  plot:'The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.', 
  runtime:'1h 32m', 
  poster:'https://m.media-amazon.com/images/I/7134I6+ZJmL._AC_SL1000_.jpg', 
  trailer:'ickbVzajrk0')

m8 = u1.movies.create(
  name:'The Crow', 
  year:'1994', 
  plot:'A man brutally murdered comes back to life as an undead avenger of his and his fiancées murder.', 
  runtime:'1h 42m', 
  poster:'https://m.media-amazon.com/images/I/71pdrpHZUfL._AC_SL1500_.jpg', 
  trailer:'N5uPZ7ocsqA')

m9 = u2.movies.create(
  name:'Labyrinth', 
  year:'1986', 
  plot:'Sixteen-year-old Sarah is given thirteen hours to solve a labyrinth and rescue her baby brother Toby when her wish for him to be taken away is granted by the Goblin King Jareth.', 
  runtime:'1h 41m', 
  poster:'https://m.media-amazon.com/images/I/619yt12HbSL._AC_SL1001_.jpg', 
  trailer:'G6C2p6H4TQ8')

m10 = u2.movies.create(
  name:'Romeo and Juliet' , 
  year:'1996', 
  plot:'Shakespeares famous play is updated to the hip modern suburb of Verona still retaining its original dialogue.', 
  runtime:'2h', 
  poster:'https://m.media-amazon.com/images/I/81xn4q+XdeL._AC_SL1500_.jpg',  
  trailer:'jTGWNHa1wIQ')

m11 = u1.movies.create(
  name:'The Three Amigos!',
  year:'1986', 
  plot:'Three actors accept an invitation to a Mexican village to perform their onscreen bandit fighter roles, unaware that it is the real thing.', 
  runtime:'1h 44m', 
  poster:'https://m.media-amazon.com/images/I/51pC6YFqfqL._AC_.jpg', 
  trailer:'g9OAjqs6dOo')

m12 = u1.movies.create(
  name:'The Neverending Story',
  year:'1984', 
  plot:'A troubled boy dives into a wondrous fantasy world through the pages of a mysterious book.', 
  runtime:'1h 42m', 
  poster:'https://m.media-amazon.com/images/I/710R6Go8u0L._AC_SY679_.jpg', 
  trailer:'YKGYgFPAP14')

m13 = u2.movies.create(
  name:'Earth Girls are Easy', 
  year:'1988', 
  plot:'A Southern California girl befriends three furry aliens after their spaceship lands in her swimming pool.', 
  runtime:'1h 40m', 
  poster:'https://m.media-amazon.com/images/I/51Bw3Zfm97L.jpg', 
  trailer:'3TnO5gz-1Wk')

m14 = u2.movies.create(
  name:'Muppet Treasure Island', 
  year:'1996', 
  plot:'The Muppets twist on the classic tale.', 
  runtime:'1h 39m', 
  poster:'https://m.media-amazon.com/images/I/61ZWo59PYKL._AC_.jpg', 
  trailer:'KLUdKoCganU')

m15 = u1.movies.create(
  name:'Man of Steel', 
  year:'2013', 
  plot:'An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth.', 
  runtime:'2h 23m', 
  poster:'https://m.media-amazon.com/images/I/81wbOkjaZ+L._AC_SL1458_.jpg', 
  trailer:'wArmHSPIvlQ')

m16 = u1.movies.create(
  name:'What Dreams May Come', 
  year:'1998', 
  plot:'Chris Nielsen dies in an accident, and enters Heaven. But when he discovers that his beloved wife Annie has killed herself out of grief over the loss, he embarks on an afterlife adventure to reunite with her.', 
  runtime:'1h 53m', 
  poster:'https://m.media-amazon.com/images/I/61-j8oLV9nL._AC_SL1500_.jpg', 
  trailer:'RmZ-FuBThuQ')

m17 = u1.movies.create(
  name:'Gladiator', 
  year:'2000', 
  plot:'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', 
  runtime:'2h 35m', 
  poster:'https://m.media-amazon.com/images/I/51a-Iz7wwCL._AC_.jpg', 
  trailer:'owK1qxDselE')

m18 = u1.movies.create(
  name:'The Count of Monte Cristo',
  year:'2002',
  plot:'A young man, falsely imprisoned by his jealous "friend", escapes and uses a hidden treasure to exact his revenge.',
  runtime:'2h 11m',
  poster:'https://m.media-amazon.com/images/I/41Byr2iM4mL._AC_.jpg',
  trailer:'qesn8pV9yu8')

m19 = u1.movies.create(
  name:'Alien',
  year:'1979',
  plot:'The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.',
  runtime:'1h 56m',
  poster:'https://m.media-amazon.com/images/I/81TpGaKY3ML._AC_UY436_FMwebp_QL65_.jpg',
  trailer:'jQ5lPt9edzQ')

m19 = u1.movies.create(
  name:'Star Wars: A New Hope',
  year:'1977',
  plot:'Young farm boy Luke Skywalker is thrust into a galaxy of adventure when he intercepts a distress call from the captive Princess Leia. The event launches him on a daring mission to rescue her from the clutches of Darth Vader and the Evil Empire.',
  runtime:'2h 4m',
  poster:'https://m.media-amazon.com/images/I/91MMkv35K5L._AC_UY436_FMwebp_QL65_.jpg',
  trailer:'1g3_CFmnU7k')

m20 = u2.movies.create(
  name:'The Bad Guys',
  year:'2022',
  plot:'Several reformed yet misunderstood criminal animals attempt to become good, with some disastrous results along the way.',
  runtime:'1h 40m',
  poster:'https://m.media-amazon.com/images/I/71R3sYwjb4L._AC_SL1464_.jpg',
  trailer:'m8Xt0yXaDPU')

m21 = u1.movies.create(
  name:'The Northman',
  year:'2022',
  plot:'From visionary director Robert Eggers comes The Northman, an action-filled epic that follows a young Viking prince on his quest to avenge his fathers murder.',
  runtime:'2h 16m',
  poster:'https://m.media-amazon.com/images/I/61DfIhoIJGL._AC_SL1500_.jpg',
  trailer:'oMSdFM12hOw')

m21 = u1.movies.create(
  name:'The Northman',
  year:'2022',
  plot:'From visionary director Robert Eggers comes The Northman, an action-filled epic that follows a young Viking prince on his quest to avenge his fathers murder.',
  runtime:'2h 16m',
  poster:'https://m.media-amazon.com/images/I/61DfIhoIJGL._AC_SL1500_.jpg',
  trailer:'oMSdFM12hOw')

m22 = u1.movies.create(
  name:'Fantastic Beasts: The Secrets of Dumbledore',
  year:'2022',
  plot:'Albus Dumbledore assigns Newt and his allies with a mission related to the rising power of Grindelwald.',
  runtime:'2h 22m',
  poster:'https://m.media-amazon.com/images/I/61KJHL4G+eL._AC_.jpg',
  trailer:'Y9dr2zw-TXQ')

m23 = u1.movies.create(
  name:'Uncharted',
  year:'2022',
  plot:'Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor "Sully" Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.',
  runtime:'1h 56m',
  poster:'https://m.media-amazon.com/images/I/71DuFCPQHRL._AC_SL1500_.jpg',
  trailer:'eHp3MbsCbMg')

  m24 = u1.movies.create(
    name:'Death On The Nile',
    year:'2022',
    plot:'While on vacation on the Nile, Hercule Poirot must investigate the murder of a young heiress.',
    runtime:'2h 7m',
    poster:'https://m.media-amazon.com/images/I/71r6YHoA4sL._AC_SL1358_.jpg',
    trailer:'ij2ztHOOe9s')
    


########## REVIEWS ##########

Review.create(
  rating:5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:1,
)

Review.create(
  rating:3,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:1,
)

Review.create(
  rating:2,
  watched:'false',
  comment:'comment goes here!',
  user_id:2,
  movie_id:1,
)

Review.create(
  rating:4,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:1,
)

Review.create(
  rating:1,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:2,
)

Review.create(
  rating:3,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:2,
)

Review.create(
  rating:3,
  watched:'false',
  comment:'comment goes here!',
  user_id:2,
  movie_id:2,
)

Review.create(
  rating:4,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:2,
)

Review.create(
  rating:4,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:3,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:3,
)

Review.create(
  rating:2,
  watched:'false',
  comment:'comment goes here!',
  user_id:2,
  movie_id:3,
)

Review.create(
  rating:4.5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:3,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:3,
)

Review.create(
  rating:2.5,
  watched:'false',
  comment:'comment goes here!',
  user_id:2,
  movie_id:3,
)

Review.create(
  rating:5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:1,
)

Review.create(
  rating:3.5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:1,
)

Review.create(
  rating:5,
  watched:'false',
  comment:'comment goes here!',
  user_id:2,
  movie_id:1,
)

Review.create(
  rating:4,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:2,
)


Review.create(
  rating:4.5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:17,
)

Review.create(
  rating:1,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:17,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:17,
)

Review.create(
  rating:4.5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:17,
)

Review.create(
  rating:5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:17,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:17,
)

Review.create(
  rating:3,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:6,
)


Review.create(
  rating:4.5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:6,
)

Review.create(
  rating:2,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:6,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:6,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:6,
)

Review.create(
  rating:5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:6,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:6,
)
Review.create(
  rating:5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:4,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:4,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:4,
)

Review.create(
  rating:2.5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:4,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:6,
)



Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:7,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:7,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:7,
)

Review.create(
  rating:4.5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:7,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:6,
)




Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:10,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:10,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:10,
)

Review.create(
  rating:4.5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:10,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:10,
)



Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:15,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:15,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:15,
)

Review.create(
  rating:4.5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:15,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:15,
)






Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:18,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:18,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:18,
)

Review.create(
  rating:4.5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:18,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:18,
)





Review.create(
  rating:4,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:15,
)

Review.create(
  rating:3.5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:15,
)

Review.create(
  rating:2.5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:15,
)

Review.create(
  rating:2.5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:15,
)

Review.create(
  rating:2,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:15,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:15,
)




Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:10,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:10,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:10,
)

Review.create(
  rating:4.5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:10,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:10,
)



Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:12,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:12,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:12,
)

Review.create(
  rating:4.5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:12,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:12,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:10,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:10,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:10,
)

Review.create(
  rating:4.5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:10,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:10,
)



Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:1,
  movie_id:9,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:9,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:9,
)

Review.create(
  rating:4.5,
  watched:'false',
  comment:'comment goes here!',
  user_id:1,
  movie_id:9,
)

Review.create(
  rating:5,
  watched:'true',
  comment:'comment goes here!',
  user_id:2,
  movie_id:9,
)
########## CAST ##########

Cast.create(
  headshot:'https://m.media-amazon.com/images/M/MV5BMTQ0NjgzNzcwNV5BMl5BanBnXkFtZTcwODExMDYxOQ@@._V1_.jpg',
  name:'Seth Rogen',
)

Cast.create(
  headshot:'https://m.media-amazon.com/images/M/MV5BMjA4MzMzNDM5MF5BMl5BanBnXkFtZTgwMjQ0MDk0NDM@._V1_.jpg',
  name:'James Franco',
)

########## ROLE ##########

Role.create(
  title:'Dale Denton',
  cast_id:1,
  movie_id:1,
)

Role.create(
  title:'Saul Silver',
  cast_id:2,
  movie_id:1,
)

adventure = Genre.create(
  name:'Adventure',
  image:''
)

comedy = Genre.create(
  name:'Comedy',
  image:''
)

fantasy = Genre.create(
  name:'Fantasy',
  image:''
)

drama = Genre.create(
  name:'Drama',
  image:''
)

mystery = Genre.create(
  name:'Mystery',
  image:''
)

romance = Genre.create(
  name:'Romance',
  image:''
)

action = Genre.create(
  name:'Action',
  image:''
)

GenreMovie.create(
  genre_id:2,
  movie_id:1
)

GenreMovie.create(
  genre_id:2,
  movie_id:1
)

GenreMovie.create(
  genre_id:2,
  movie_id:1
)

GenreMovie.create(
  genre_id:3,
  movie_id:2
)

GenreMovie.create(
  genre_id:2,
  movie_id:2
)

puts "Movies: #{Movie.all.length}"
puts "Reviews: #{Review.all.length}"
puts "Cast: #{Cast.all.length}"
puts "Role: #{Role.all.length}"
