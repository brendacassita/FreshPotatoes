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

  def self.scores(id)
    Movie.find_by_sql(["SELECT m.id, m.name
    , COUNT(rev.id) AS review_num
    , (SELECT (SUM(rev.rating)/(COUNT(rev.id)*5)*100)
        WHERE rev.watched = 'true') AS watched_rating
    , (SELECT (SUM(rev.rating)/(COUNT(rev.id)*5)*100)
        WHERE rev.watched = 'false') AS unwatched_rating
    FROM movies m
    INNER JOIN reviews rev ON m.id = rev.movie_id
    WHERE m.id = ?
    GROUP BY m.id, m.name, rev.watched", id])
  end

end
