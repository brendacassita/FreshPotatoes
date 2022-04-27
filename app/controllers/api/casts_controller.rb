class Api::CastsController < ApplicationController
    require 'rest-client'
    BASE_URL = "https://api.themoviedb.org/3/movie/"
    API_PARTIAL_URL = "?api_key=#{ENV['TMDB_API_KEY']}"
    
    before_action :set_movie
    before_action :set_cast, only: [:update, :show, :destroy]

    def index
        puts @movie.id
        response = RestClient.get("#{BASE_URL}#{@movie.id}/credits#{API_PARTIAL_URL}&language=en-US")
        render json: response
    end

    def show
        render json: Cast.member(@cast.id)
    end

    def create
        cast = Cast.new(cast_params)
        if(cast.save)
            render json: cast
        else
            render json: {error:cast.error.full_messages}, status: 422
        end
    end

    def update
        if(@cast.update(cast_params))
            render json: @cast
        else
            render json: {error:@cast.errors.full_messages}, status: 422
        end
    end
    
    def destroy
        render json: @cast.destroy
    end


    private

    def set_movie
        TMDB::API.api_key = "b8780ae423693a3389766038fe49d728"
        @movie = TMDB::Movie.id(params[:id])
    end

    def set_cast
        @cast = Cast.find(params[:id])
    end

    def cast_params
        params.require(:cast).permit(:headshot, :name)
    end

end
