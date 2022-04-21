class Genre < ApplicationRecord
  has_many :genre_movie

  def self.movies(name)
    Genre.find_by_sql(["SELECT g.id AS genre_id, g.name AS genre_name, g.image, m.id AS movie_id, m.name AS movie_name, m.poster, m.runtime, m.year
    FROM genres AS g
    INNER JOIN genre_movies AS gm ON g.id = gm.genre_id
    INNER JOIN movies AS m ON m.id = gm.movie_id
    WHERE LOWER(g.name) LIKE ?", name])
  end

  def self.movies_id(id)
    Genre.find_by_sql(["SELECT g.id AS genre_id, g.name AS genre_name, g.image, m.id AS movie_id, m.name AS movie_name, m.poster, m.runtime, m.year
    FROM genres AS g
    INNER JOIN genre_movies AS gm ON g.id = gm.genre_id
    INNER JOIN movies AS m ON m.id = gm.movie_id
    WHERE g.id = ?", id])
  end

  def self.popular
    Genre.find_by_sql("SELECT g.name, COUNT(gm.movie_id) AS num
    FROM genres AS g
    INNER JOIN genre_movies AS gm ON g.id = gm.genre_id
    GROUP BY g.name
    ORDER BY num DESC
    LIMIT 3")
  end

end
