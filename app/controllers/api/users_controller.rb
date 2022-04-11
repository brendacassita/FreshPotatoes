class Api::UsersController < ApplicationController
  before_action :authenticate_user!

  
  def update_image
   
      file = params[:fileYO]
     
      # CREATE AN IMAGE TO CLOUDINARY
      #check if we have a file, if we do try to save 
      if file 
          begin
              # try to save img (file) to cloudinary
              # if .env not setup correctly this will fail
              cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
              # binding.pry
              puts '===cloud_image==='
              puts cloud_image
              current_user.image = cloud_image['secure_url']
          rescue => e
              # image did not save to cloudinary
              render json: {errors:e}, status: 422
              # exit function for now
              return
          end
      
      end
      # STORE THE IMAGE URL FROM CLOUD TO OUR MODEL (TO OUR DB)
      # VIA UPDATING OUR USER, WE ALSO MIGTH WANT TO UPDAT OTHER 
      # FIELDS (name)IN THIS CASE
      if current_user.save
          render json: current_user
      else
          render json: {errors:current_user.errors.full_messages}, status: 422
      end
  end
end