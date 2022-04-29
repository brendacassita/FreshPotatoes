class Movie < ApplicationRecord
  belongs_to :user
  has_many :roles
  has_many :genre_movie

  def self.topPotatoes
    Movie.find_by_sql("SELECT r.movie_id, (SELECT ROUND(SUM(r.rating)/(COUNT(r.id)*5)*100)) AS unwatched_rating
    FROM reviews r
    WHERE r.watched = 'false'
    GROUP BY r.movie_id
    HAVING COUNT(r.id)>=5
    ORDER BY unwatched_rating DESC")
  end

  def self.topFries
    Movie.find_by_sql("SELECT r.movie_id, (SELECT ROUND(SUM(r.rating)/(COUNT(r.id)*5)*100)) AS watched_rating
    FROM reviews r
    WHERE r.watched = 'true'
    GROUP BY r.movie_id
    HAVING COUNT(r.id)>=5
    ORDER BY watched_rating DESC")
  end

end
