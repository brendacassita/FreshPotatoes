class Review < ApplicationRecord
  belongs_to :user

  def self.pre(id)   
    Review.find_by_sql(["SELECT r.id AS review_id, r.rating, r.comment, u.id AS user_id, u.username, u.avatar
    FROM reviews r
    INNER JOIN users u ON r.user_id = u.id
    WHERE r.movie_id = ? AND r.watched = 'false'", id])
  end

  def self.post(id)   
    Review.find_by_sql(["SELECT r.id AS review_id, r.rating, r.comment, u.id AS user_id, u.username, u.avatar
    FROM reviews r
    INNER JOIN users u ON r.user_id = u.id
    WHERE r.movie_id = ? AND r.watched = 'true'", id])
  end

  def self.unwatched(id)
    Review.find_by_sql(["SELECT rev.movie_id, (SELECT ROUND(SUM(rev.rating)  /(COUNT(rev.id)*5)*100)) AS rating
    FROM reviews rev
    WHERE rev.movie_id = ? AND rev.watched = 'false'
    GROUP BY rev.movie_id", id])
  end

  def self.watched(id)
    Review.find_by_sql(["SELECT rev.movie_id, (SELECT ROUND(SUM(rev.rating)  /(COUNT(rev.id)*5)*100)) AS rating
    FROM reviews rev
    WHERE rev.movie_id = ? AND rev.watched = 'true'
    GROUP BY rev.movie_id", id])
  end

end 
