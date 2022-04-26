class Api::ReviewsController < ApplicationController
    require 'rest-client'
    BASE_URL = "https://api.themoviedb.org/3/movie/"
    API_PARTIAL_URL = "?api_key=#{ENV['TMDB_API_KEY']}"
    
    before_action :authenticate_user!, only: [:create]
    before_action :set_review, only: [:update, :show, :destroy]
    before_action :set_movie

    def index
        render json: Review.where("movie_id = #{@movie.id}")
    end

    def preWatched 
        render json: Review.preWatched(@review.movie_id)
    end

    # def postWatched
    # end

    def unwatched
        puts @movie.id
        render json: Review.unwatched(@movie.id)
    end

    def watched
        puts @movie.id
        render json: Review.watched(@movie.id)
    end

    def show
        render json: @reviews
    end

    # def watched
    #     render json: Review.watched_score(@review.movie_id)
    # end

    
    def create
        review = current_user.reviews.new(review_params)
        if(review.save)
            render json: review
        else
            render json: {error:review.errors.full_messages},   status: 422
        end
    end

    def update
        if(@review.update(review_params))
            render json: @review
        else
            render json: {error:@review.errors.full_messages}, status: 422
        end
    end

    def destroy
        render json: @review.destroy
    end


    private
    def set_movie
        TMDB::API.api_key = "b8780ae423693a3389766038fe49d728"
        @movie = TMDB::Movie.id(params[:id])
    end

    def set_review
        @review = Review.find(params[:id])
    end

    def review_params
        params.require(:review).permit(:rating, :comment, :watched,  :user_id, :movie_id)
    end

end
