class Review < ApplicationRecord
  belongs_to :user
  belongs_to :movie

  # def self.watched_score
  #   select("m.id, m.name, SUM(rev.rating)")
  #   .from("reviews AS rev")
  #   .joins("INNER JOIN movies AS m ON rev.movie_id = m.id")
  #   .where("m.id = ?", id)
  # end

end
