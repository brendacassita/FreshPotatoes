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

     
     
     get 'all_users', to: 'movies#all_users'
   end

     
    
end
