class Api::MoviesController < ApplicationController
  require 'rest-client'
  BASE_URL = "https://api.themoviedb.org/3/movie/"
  API_PARTIAL_URL = "?api_key=#{ENV['TMDB_API_KEY']}"

  before_action :set_movie, only: [:show, :videos, :watched, :unwatched, :cast, :update, :destroy]
  before_action :page, only: [:pageTopPotatoes, :pageTopFries]

def index 
    # render json: Movie.all
    url_list = ["#{BASE_URL}popular#{API_PARTIAL_URL}&language=en-US&page=1"
    # ,"#{BASE_URL}popular#{API_PARTIAL_URL}&language=en-US&page=2","#{BASE_URL}popular#{API_PARTIAL_URL}&language=en-US&page=3"
  ]
    # RestClient.get("#{BASE_URL}popular#{API_PARTIAL_URL}&language=en-US&page=1")
    responses = []
    url_list.each do |url|
      responses << JSON.parse(RestClient::Request.execute(method: :get, url: url))
    end
    render json: responses, layout: nil
end

def show
  response = RestClient.get("#{BASE_URL}#{@movie.id}#{API_PARTIAL_URL}")
  render json: response
end

def videos
  response = RestClient.get("#{BASE_URL}#{@movie.id}/videos#{API_PARTIAL_URL}&language=en-US")
  render json: response
end

### WATCHED/UNWATCHED RATINGS ###
def watched
  render json: Movie.watched(@movie.id)
end

def unwatched
  render json: Movie.unwatched(@movie.id)
end

### NEWEST MOVIES ###
def newest
  response = RestClient.get(BASE_URL + "upcoming" + API_PARTIAL_URL)
  render json: response
end

### MOST POPULAR BY REVIEW COUNT 35+ REVIEWS ###
def popular
  response = RestClient.get(BASE_URL + "popular" + API_PARTIAL_URL + "&language=en-US&page=1")
  render json: response
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
def topPotatoes
  render json: Movie.topPotatoes
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
  render json: {movie: Kaminari.paginate_array(movies).page(@page).per(@per), per:@per, count:count, page:@page}
end

### PRIVATE ###
private 

def set_movie
    TMDB::API.api_key = "b8780ae423693a3389766038fe49d728"
    @movie = TMDB::Movie.id(params[:id])
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