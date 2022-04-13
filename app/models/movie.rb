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

  # def self.watched_score(id)
  #   select("m.id, m.name, SUM(rev.rating) AS watched_rating")
  #   .from("movies AS m")
  #   .joins("INNER JOIN reviews AS rev ON m.id = rev.movie_id")
  #   .group("m.id, m.name")
  #   .where("m.id = ? AND rev.watched = 'false'", id)
  # end

  def self.watched_score(id)
    Movie.find_by_sql(["SELECT m.id, m.name
    , (SELECT (SUM(rev.rating)/(COUNT(rev.id)*5)*100)
        WHERE rev.watched = 'true') AS score
        FROM reviews rev
        INNER JOIN movies m ON rev.movie_id = m.id
        WHERE m.id = ?
        GROUP BY m.id, m.name, rev.watched", id])
  end

  # SELECT DISTINCT m.name AS "movie_name", m.genre, m.poster, m.trailer, m.plot, m.runtime, m.year, r.title, c.headshot, c.name AS "cast_name"
  # FROM movies AS m
  # INNER JOIN roles AS r ON m.id = r.movie_id
  # INNER JOIN casts AS c ON r.cast_id = c.id
  # INNER JOIN reviews AS rev ON m.id = rev.movie_id

  # GROUP BY m.name, m.genre, m.poster, m.trailer, m.plot, m.runtime, m.year, r.  title, c.headshot, c.name

end
