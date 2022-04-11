class Api::ReviewsController < ApplicationController
    before_action :set_review, only: [:update, :show, :destroy]

    def index
        render json: Review.all
    end

    def create
        review = Review.new(review_params)
        if(review.save)
            render json: review
        else
            render json: {error:review.errors.full_messages},   status: 422
        end
    end

    def update
        if(@review.update(reivew_params))
            render json: @review
        else
            render json: {error:@review.errors.full_messages}, status: 422
        end
    end

    def destroy
        render json: @review.destroy
    end


    private

    def set_review
        @review = Review.find(params[:id])
    end

    def review_params
        params.require(:review).permit(:rating, :watched)
    end

end
