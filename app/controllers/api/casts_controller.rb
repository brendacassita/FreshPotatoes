class Api::CastsController < ApplicationController
    before_action :set_cast, only: [:update, :show, :destroy]

    def index
        render json: Cast.all
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

    def set_cast
        @cast = Cast.find(params[:id])
    end

    def cast_params
        params.require(:cast).permit(:headshot, :name)
    end

end
