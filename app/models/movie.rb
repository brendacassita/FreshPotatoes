class Movie < ApplicationRecord
  belongs_to :user
  has_many :reviews
  has_many :roles
  has_many :genre_movie
  

  def self.details(id)
    # puts movie.id
    # id = movie.id
    Movie.find_by_sql(["SELECT m.id, m.name AS movie_name, STRING_AGG(g.name, ', ') AS genre, m.poster, m.trailer, m.plot, m.runtime, m.year
    FROM movies AS m
    INNER JOIN genre_movies AS gm ON m.id = gm.movie_id
    INNER JOIN genres AS g ON gm.genre_id = g.id
    WHERE m.id = ?
    GROUP BY m.id, m.name, m.poster, m.trailer, m.plot, m.runtime, m.year", id])
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
    , (SELECT (SUM(rev.rating)/(COUNT(rev.id)*5)*100)) AS watched_rating
    FROM movies m
    INNER JOIN reviews rev ON m.id = rev.movie_id
    WHERE m.id = ? AND rev.watched = 'true'
    GROUP BY m.id, rev.watched
    ORDER BY m.id", id])
  end

  def self.top3_potatoes
    Movie.find_by_sql("SELECT m.id, m.name, m.poster, m.runtime, m.year, m.plot, (SELECT (SUM(rev.rating)/(COUNT(rev.id)*5)*100)) AS unwatched_rating, COUNT(rev.id) AS rev_count
    FROM movies AS m
    INNER JOIN reviews AS rev ON m.id = rev.movie_id
    WHERE rev.watched = 'false'
    GROUP BY m.id, m.name, m.poster, m.runtime, m.year, m.plot
    HAVING COUNT(rev.id)>=5
    ORDER BY unwatched_rating DESC
    LIMIT 3")
  end

  def self.topPotatoes
    Movie.find_by_sql("SELECT m.id, m.name, m.poster, m.runtime, m.year, m.plot, (SELECT (SUM(rev.rating)/(COUNT(rev.id)*5)*100)) AS unwatched_rating
    FROM movies AS m
    INNER JOIN reviews AS rev ON m.id = rev.movie_id
    WHERE rev.watched = 'false'
    GROUP BY m.id, m.name, m.poster, m.runtime, m.year, m.plot
    HAVING COUNT(rev.id)>=5
    ORDER BY unwatched_rating DESC")
  end
  def self.top3_fries
    Movie.find_by_sql("SELECT m.id, m.name, m.poster, m.runtime, m.year, m.plot, (SELECT (SUM(rev.rating)/(COUNT(rev.id)*5)*100)) AS watched_rating
    FROM movies AS m
    INNER JOIN reviews AS rev ON m.id = rev.movie_id
    WHERE rev.watched = 'true'
    GROUP BY m.id, m.name, m.poster, m.runtime, m.year, m.plot
    HAVING COUNT(rev.id)>=5
    ORDER BY watched_rating DESC
    LIMIT 3")
  end

  def self.topFries
    Movie.find_by_sql("SELECT m.id, m.name, m.poster, m.runtime, m.year, m.plot, (SELECT (SUM(rev.rating)/(COUNT(rev.id)*5)*100)) AS watched_rating
    FROM movies AS m
    INNER JOIN reviews AS rev ON m.id = rev.movie_id
    WHERE rev.watched = 'true'
    GROUP BY m.id, m.name, m.poster, m.runtime, m.year, m.plot
    HAVING COUNT(rev.id)>=5
    ORDER BY watched_rating DESC")
  end

  def self.newest
    Movie.find_by_sql("SELECT m.id, m.name AS movie_name, STRING_AGG(g.name, ', ') AS genre, m.poster, m.runtime, m.year
    FROM movies AS m
    INNER JOIN genre_movies AS gm ON m.id = gm.movie_id
    INNER JOIN genres AS g ON gm.genre_id = g.id
    GROUP BY m.id, m.name, m.poster, m.runtime, m.year
    ORDER BY m.year DESC
    LIMIT 5")
  end

  def self.cast(id)
    Movie.find_by_sql(["SELECT m.id, r.title, c.name, c.headshot
    FROM movies AS m
    INNER JOIN roles AS r ON m.id = r.movie_id
    INNER JOIN casts AS c ON c.id = r.cast_id
    WHERE m.id = ?", id])
  end

  # def self.categories
  #   select("m.genre")
  #   .from("movies AS m")
  #   .group("m.genre")
  # end

end
