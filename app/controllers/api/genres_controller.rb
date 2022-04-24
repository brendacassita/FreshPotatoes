class Api::GenresController < ApplicationController
    before_action :set_genre, only: [:show, :update, :destroy]
    # before_action :set_name, only: [:genre_show]

    def index
        render json: Genre.all
    end

    def show
        render json: Genre.movies_id(@genre.id)
    end

    def tmdb_genres
        url = "https://api.themoviedb.org/3/genre/movie/list?api_key=b8780ae423693a3389766038fe49d728&language=en-US"
        response = RestClient.get(url)
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

    def set_name
        puts json: Genre.find(params[:name])
        @genre = Genre.find(params[:name])
    end

    def set_genre
        @genre = Genre.find(params[:id])
    end

    def genre_params
        params.require(:genre).permit(:name, :image)
    end

end
