class Api::CastsController < ApplicationController
    before_action :set_movie
    before_action :set_cast, only: [:update, :show, :destroy]

    def index
        render json: Movie.cast(@movie.id)
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
        @movie = Movie.find(params[:movie_id])
    end

    def set_cast
        @cast = Cast.find(params[:id])
    end

    def cast_params
        params.require(:cast).permit(:headshot, :name)
    end

end
