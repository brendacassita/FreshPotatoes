class Api::MoviesController < ApplicationController
  before_action :set_movie, only: [:show, :details, :watched, :unwatched, :update, :destroy]
  before_action :page, only: [:pageMovies]

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

def watched
  render json: Movie.watched(@movie.id)
end

def unwatched
  render json: Movie.unwatched(@movie.id)
end

def top3_potatoes
  render json: Movie.top3_potatoes
end

def top10_potatoes
  render json: Movie.top10_potatoes
end

# def top3_fries
#   render json: Movie.top3_fries
# end

def top10_fries
  render json: Movie.top10_fries
end

def newest
  render json: Movie.newest
end

def categories
  render json: Movie.categories
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


def pageTopPotatoes
  count = Movie.top10_potatoes.count
  movies = Movie.top10_potatoes
  puts json: movies
  render json: {movie: Kaminari.paginate_array(movies).page(@page).per(@per), per:@per, count:3}
end

def pageTopFries
  count = Movie.top10_fries.count
  movies = Movie.top10_fries
  render json: {movie: Kaminari.paginate_array(movies).page(@page).per(@per), per:@per, count:3}
end

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
  @per = params[:per] || 2
end

end