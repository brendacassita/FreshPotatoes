class Api::GenresController < ApplicationController
    require 'rest-client'
    BASE_URL = "https://api.themoviedb.org/3/movie/"
    API_PARTIAL_URL = "?api_key=#{ENV['TMDB_API_KEY']}"
    
    before_action :set_genre, only: [:show, :update, :destroy]
    # before_action :set_movie, only: [:show, :update, :destroy]
    # before_action :set_name, only: [:genre_show]

    def index
        response = RestClient.get("https://api.themoviedb.org/3/genre/movie/list#{API_PARTIAL_URL}&language=en-US")
        render json: response
    end

    def show
        response = RestClient.get("https://api.themoviedb.org/3/discover/movie?api_key=b8780ae423693a3389766038fe49d728&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=#{params[:id]}&without_keywords=158436%2C%20445%2C%20180340%2C%20283206%2C%207344%2C%2018321%2C%20195997&with_original_language=en")
        render json: response
    end

    def genre_show
        render json: Genre.movies(params[:name].downcase)
    end

    def popular
        render json: Genre.popular
    end

    def create
        genre = Genre.new(genre_params)
        if(genre.save)
            render json: genre
        else
            render json: {error:genre.error.full_messages}, status: 422
        end
    end

    def update
        if(@genre.update(genre_params))
            render json: @genre
        else
            render json: {error:@genre.errors.full_messages}, status: 422
        end
    end

    def destroy
        render json: @genre.destroy
    end


    private

    # def set_name
    #     puts json: Genre.find(params[:name])
    #     @genre = Genre.find(params[:name])
    # end

    def set_genre
        TMDB::API.api_key = "b8780ae423693a3389766038fe49d728"
        @genre = TMDB::Movie.id(params[:id])
        puts @genre.id
    end

    # def set_genre
    #     TMDB::API.api_key = "b8780ae423693a3389766038fe49d728"
    #     @genre = TMDB::Genre.details(params(:id))
    #     puts @genre.id
    # end

    def genre_params
        params.require(:genre).permit(:name, :image)
    end

end
