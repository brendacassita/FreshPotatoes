class Api::MoviesController < ApplicationController
  require 'rest-client'

  before_action :set_movie, only: [:show, :details, :watched, :unwatched, :cast, :update, :destroy]
  before_action :page, only: [:pageTopPotatoes, :pageTopFries]

#authenticate_user! - anyone can go there, even if not signed in
 # before_action :authenticate_user!, except: [:all_users]


#TODO: for later use, movies visible for all users, even those not logged in
# def all_users
#     render json: Movie.all
# end 

# /api/movies
def index 
    render json: Movie.all
end

#/api/movies/1
# def show 
#   render json: @movie
# end 

#TODO: for an auth user 
# def create
#   movie = current_user.movies.new(movie_params)
#   if movie.save 
#     render json: movie
#   else 
#     render json: {}
#   end 
# end 

def show
  render json: Movie.details(@movie.id)
end

### WATCHED/UNWATCHED RATINGS ###
def watched
  render json: Movie.watched(@movie.id)
end

def unwatched
  render json: Movie.unwatched(@movie.id)
end

### NEWEST 5 MOVIES BY YEAR ###
def newest
  render json: Movie.newest
end

### MOST POPULAR BY REVIEW COUNT 35+ REVIEWS ###
def popular
  render json: Movie.popular
end

### CAST LIST BY MOVIE ID ###
def cast
  render json: Movie.cast(@movie.id)
end

def create 
  movie = Movie.new(movie_params)
  if(movie.save)
    render json: movie
  else
    render json: {error: movie.errors.full_messages}, status: 422
  end 
end 

def update
  if (@movie.update(movie_params))
    render json: @movie
  else
    render json: {errors: @movie.errors.full_messages}, status: 422
  end
end 


def destroy
  @movie.destroy
end

### TOP POTATOES/FRIES ###
def top3_potatoes
  render json: Movie.top3_potatoes
end

def topPotatoes
  render json: Movie.topPotatoes
end

def top3_fries
  render json: Movie.top3_fries
end

def topFries
  render json: Movie.topFries
end

def pageTopPotatoes
  count = Movie.topPotatoes.count
  movies = Movie.topPotatoes
  puts json: movies
  render json: {movie: Kaminari.paginate_array(movies).page(@page).per(@per), per:@per, count:count}
end

def pageTopFries
  count = Movie.topFries.count
  movies = Movie.topFries
  render json: {movie: Kaminari.paginate_array(movies).page(@page).per(@per), per:@per, count:count}
end

### PRIVATE ###
private 

def set_movie
    @movie = Movie.find(params[:id])
end

def movie_params
  params.require(:movie).permit(
     :name,
     :genre, 
     :poster, 
     :trailer, 
     :plot, 
     :runtime, 
     :year, 
     :user_id
     )
end

def page
  @page = params[:page] || 1
  @per = params[:per] || 3
end

end