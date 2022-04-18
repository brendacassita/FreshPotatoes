class Cast < ApplicationRecord
  has_many :roles
  has_many :movies, through: :roles

  def self.member(id)
    Cast.find_by_sql(["SELECT r.title, c.id, c.name, c.headshot 
    FROM casts AS c
    INNER JOIN roles AS r ON c.id = r.cast_id
    WHERE c.id = ?", id])
  end

end
