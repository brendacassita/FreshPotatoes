class Review < ApplicationRecord
  belongs_to :user

  def self.preWatched(movie_id)   
    Review.find_by_sql(["SELECT r.rating, r.comment, r.user_id, u.username
    FROM reviews AS r
    INNER JOIN movies AS m ON r.movie_id = m.id 
    INNER JOIN users AS u ON r.user_id = u.id 
    WHERE r.movie_id = ? 
    AND r.watched = 'false'", movie_id ])
  end

  def self.unwatched(id)
    Review.find_by_sql(["SELECT rev.movie_id, (SELECT (SUM(rev.rating)  /(COUNT(rev.id)*5)*100)) AS unwatched_rating
    FROM reviews rev
    WHERE rev.movie_id = ? AND rev.watched = 'false'
    GROUP BY rev.movie_id", id])
  end

  def self.watched(id)
    Review.find_by_sql(["SELECT rev.movie_id, (SELECT (SUM(rev.rating)  /(COUNT(rev.id)*5)*100)) AS unwatched_rating
    FROM reviews rev
    WHERE rev.movie_id = ? AND rev.watched = 'true'
    GROUP BY rev.movie_id", id])
  end

end 
