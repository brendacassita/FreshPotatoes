Rails.application.routes.draw do
  # generates all devise routes
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
   namespace :api do 
    resources :movies
    resources :reviews
    resources :casts
    resources :roles
    resources :users
    resources :genres

    put '/update_image', to: "users#update_image"

    get 'all_users', to: 'movies#all_users'
    get 'movies/:id/watched', to: 'movies#watched'
    get 'movies/:id/unwatched', to: 'movies#unwatched'
    get 'top3/potatoes', to: 'movies#top3_potatoes'
    get 'top10/potatoes', to: 'movies#top10_potatoes'
    get 'top3/fries', to: 'movies#top3_fries'
    get 'top10/fries', to: 'movies#top10_fries'
    get 'newest', to: 'movies#newest'
    get '/categories', to: 'movies#categories'

    get'pagetoppotatoes', to: 'movies#pageTopPotatoes'
    get'pagetopfries', to: 'movies#pageTopFries'

   
    end  
    get '*other', to: 'static#index'
end
