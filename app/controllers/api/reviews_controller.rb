class Api::ReviewsController < ApplicationController
    before_action :authenticate_user!, only: [:create]
    before_action :set_review, only: [:update, :show, :destroy]
    before_action :set_movie

    def index
        render json: @movie.reviews
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
        @movie = Movie.find(params[:movie_id])
    end

    def set_review
        @review = Review.find(params[:id])
    end

    def review_params
        params.require(:review).permit(:rating, :comment, :watched,  :user_id, :movie_id)
    end

end
