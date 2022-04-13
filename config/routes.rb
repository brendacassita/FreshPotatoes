Rails.application.routes.draw do
  # generates all devise routes
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
   namespace :api do 
    resources :movies
    resources :reviews
    resources :casts
    resources :roles


     put 'users/update_image', to: "users#update_image"
<<<<<<< HEAD
   
     
     get 'all_users', to: 'movies#all_users'
   end
=======
>>>>>>> fd4db8adc64ae3dfd94201cdbf69b131ebd8c5a1

     
     get 'all_users', to: 'movies#all_users'

    #  get 'movies/:id/details', to: 'movies#details'
   
    end  
    
end
