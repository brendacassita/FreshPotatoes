class Movie < ApplicationRecord
  belongs_to :user
  has_many :reviews
  has_many :roles

  def self.details(id)
    # puts movie.id
    # id = movie.id
    select("m.name AS movie_name, m.genre, m.poster, m.trailer, m.plot, m.runtime, m.year, r.title, c.headshot, c.name AS cast_name")
    .from("movies AS m")
    .joins("INNER JOIN roles AS r ON m.id = r.movie_id
    INNER JOIN casts AS c ON c.id = r.cast_id")
    .group("m.name, m.genre, m.poster, m.trailer, m.plot, m.runtime, m.year, r.title, c.headshot, c.name")
    .where("m.id = ?", id)
   
  end

  # SELECT DISTINCT m.name AS "movie_name", m.genre, m.poster, m.trailer, m.plot, m.runtime, m.year, r.title, c.headshot, c.name AS "cast_name"
  # FROM movies AS m
  # INNER JOIN roles AS r ON m.id = r.movie_id
  # INNER JOIN casts AS c ON r.cast_id = c.id
  # INNER JOIN reviews AS rev ON m.id = rev.movie_id

  # GROUP BY m.name, m.genre, m.poster, m.trailer, m.plot, m.runtime, m.year, r.  title, c.headshot, c.name

end
