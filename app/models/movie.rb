class Movie < ApplicationRecord
  belongs_to :user
  has_many :reviews
  has_many :roles

  def self.details(id)
    # puts movie.id
    # id = movie.id
    Movie.find_by_sql(["SELECT m.name AS movie_name, m.genre, m.poster, m.trailer, m.plot, m.runtime, m.year, r.title, c.headshot, c.name AS cast_name
    FROM movies AS m
    LEFT JOIN roles AS r ON m.id = r.movie_id
    LEFT JOIN casts AS c ON c.id = r.cast_id
    WHERE m.id = ?", id])
  end

  def self.unwatched(id)
    Movie.find_by_sql(["SELECT m.id, m.name
    , (SELECT (SUM(rev.rating)/(COUNT(rev.id)*5)*100)) AS unwatched_rating
    FROM movies m
    INNER JOIN reviews rev ON m.id = rev.movie_id
    WHERE m.id = ? AND rev.watched = 'false'
    GROUP BY m.id, rev.watched
    ORDER BY m.id", id])
  end

  def self.watched(id)
    Movie.find_by_sql(["SELECT m.id, m.name
    , (SELECT (SUM(rev.rating)/(COUNT(rev.id)*5)*100)) AS unwatched_rating
    FROM movies m
    INNER JOIN reviews rev ON m.id = rev.movie_id
    WHERE m.id = ? AND rev.watched = 'true'
    GROUP BY m.id, rev.watched
    ORDER BY m.id", id])
  end

  def self.top3_potatoes
    Movie.find_by_sql("SELECT m.id, m.name, m.poster, m.runtime, m.year, m.plot, (SELECT (SUM(rev.rating)/(COUNT(rev.id)*5)*100)) AS unwatched_rating
    FROM movies AS m
    INNER JOIN reviews AS rev ON m.id = rev.movie_id
    WHERE rev.watched = 'false'
    GROUP BY m.id, m.name, m.poster, m.runtime, m.year, m.plot
    ORDER BY unwatched_rating DESC
    LIMIT 3")
  end

  def self.top10_potatoes
    Movie.find_by_sql("SELECT m.id, m.name, m.poster, m.runtime, m.year, m.plot, (SELECT (SUM(rev.rating)/(COUNT(rev.id)*5)*100)) AS unwatched_rating
    FROM movies AS m
    INNER JOIN reviews AS rev ON m.id = rev.movie_id
    WHERE rev.watched = 'false'
    GROUP BY m.id, m.name, m.poster, m.runtime, m.year, m.plot
    ORDER BY unwatched_rating DESC
    LIMIT 10")
  end

  def self.top3_fries
    Movie.find_by_sql("SELECT m.id, m.name, m.poster, m.runtime, m.year, m.plot, (SELECT (SUM(rev.rating)/(COUNT(rev.id)*5)*100)) AS watched_rating
    FROM movies AS m
    INNER JOIN reviews AS rev ON m.id = rev.movie_id
    WHERE rev.watched = 'true'
    GROUP BY m.id, m.name, m.poster, m.runtime, m.year, m.plot
    ORDER BY unwatched_rating DESC
    LIMIT 3")
  end

  def self.top10_fries
    Movie.find_by_sql("SELECT m.id, m.name, m.poster, m.runtime, m.year, m.plot, (SELECT (SUM(rev.rating)/(COUNT(rev.id)*5)*100)) AS watched_rating
    FROM movies AS m
    INNER JOIN reviews AS rev ON m.id = rev.movie_id
    WHERE rev.watched = 'true'
    GROUP BY m.id, m.name, m.poster, m.runtime, m.year, m.plot
    ORDER BY unwatched_rating DESC
    LIMIT 10")
  end

  def self.newest
    Movie.find_by_sql("SELECT m.name, m.poster, m.genre, m.runtime, m.year
    FROM movies AS m
    ORDER BY m.year DESC
    LIMIT 5")
  end

  def self.categories
    select("m.genre")
    .from("movies AS m")
    .group("m.genre")
  end

end
