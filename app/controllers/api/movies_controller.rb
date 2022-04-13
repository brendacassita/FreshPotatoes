class Api::MoviesController < ApplicationController
  before_action :set_movie, only: [:show, :details, :scores, :update, :destroy]

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

def scores
  render json: Movie.scores(@movie.id)
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


end
