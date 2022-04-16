class Genre < ApplicationRecord
  has_many :genre_movie

  def self.movies(id)
    Genre.find_by_sql(["SELECT g.id, g.name AS genre, g.image, m.name AS movie_name, m.poster, m.runtime, m.year
    FROM genres AS g
    INNER JOIN genre_movies AS gm ON g.id = gm.genre_id
    INNER JOIN movies AS m ON m.id = gm.movie_id
    WHERE g.id = ?", id])
  end
end
