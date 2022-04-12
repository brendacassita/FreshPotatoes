class Api::RolesController < ApplicationController
    before_action :set_role, only: [:show, :update, :destroy]

    def index
        render json: Role.all
      end
    
      def show
        render json: @role
      end
    
      def create
        role = Role.new(role_params)
    
        if @role.save
          render json: role
        else
          render json: {errors: role.errors.full_messages}, startus: 422
        end
      end
    
  
      def update
        if @role.update(role_params)
          render json: @role
        else
          render json: {errors: @role.errors: @mrole.errors.full_messages}, status:422
        end
      end
    
     
      def destroy
        @role.destroy
      end

      private

    def set_role
        @role = role.find(params[:id])
    end

    def role_params
        params.require(:role).permit(:title, :cast_id, :movie_id)
    end

end
    
