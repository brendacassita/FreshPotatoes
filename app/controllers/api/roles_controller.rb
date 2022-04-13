class Api::RolesController < ApplicationController
    before_action :set_role, only: [:show, :update, :destroy]
#get api/roles
    def index
      render json: Role.all
    end

    #get api/roles/#id
    def show
      render json: @role
    end
    
    #post api/roles
    def create
       role = Role.new(role_params)
    
     if role.save
          render json: role
    else
          render json: {errors: role.errors.full_messages}, status: 422
        end
      end
    
  #put api/roles/#id
      def update
        if (@role.update(role_params))
          render json: @role
        else
          render json: {errors: @role.errors.full_messages}, status:422
        end
      end
    
     #delete api/roles/#id
      def destroy
        @role.destroy
      end

      private

    def set_role
        @role = Role.find(params[:id])
    end

    def role_params
        params.require(:role).permit(:title, :cast_id, :movie_id)
    end

end
    
