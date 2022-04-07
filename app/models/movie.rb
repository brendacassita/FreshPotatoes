class Movie < ApplicationRecord
  belongs_to :user
  has_many :reviews
  has_many :roles
end
