class Review < ApplicationRecord
  belongs_to :user
  belongs_to :movie

  def self.preWatched(movie_id) 
    
  Review.find_by_sql(["SELECT r.rating, r.comment, r.user_id, u.username
FROM reviews AS r
INNER JOIN movies AS m ON r.movie_id = m.id 
INNER JOIN users AS u ON r.user_id = u.id 
WHERE r.movie_id = ? 
AND r.watched = 'false'", movie_id ])
end

end 
