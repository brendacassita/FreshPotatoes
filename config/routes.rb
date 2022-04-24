Rails.application.routes.draw do
  # generates all devise routes
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
   namespace :api do 
    resources :movies do
      resources :casts
      resources :reviews
    end
    resources :roles
    resources :users
    resources :genres, except: :show

    put '/update_image', to: "users#update_image"

    get 'all_users', to: 'movies#all_users'

    # GRABS RATINGS FOR WATCHED/UNWATCHED
    get 'movies/:id/watched', to: 'movies#watched'
    get 'movies/:id/unwatched', to: 'movies#unwatched'

    # TOP 3 AND TOP 10 POTATOES/FRIES BASED ON SCORES
    get 'top3/potatoes', to: 'movies#top3_potatoes'
    get 'top/potatoes', to: 'movies#topPotatoes'
    get 'top3/fries', to: 'movies#top3_fries'
    get 'top/fries', to: 'movies#topFries'
    get 'pagetoppotatoes', to: 'movies#pageTopPotatoes'
    get 'pagetopfries', to: 'movies#pageTopFries'

    # NEWEST MOVIES BY DATE
    get 'newest', to: 'movies#newest'

    get 'genres/:name', to: 'genres#genre_show'

    # MOST POPULAR MOVIES AND GENRES
    get '/popular/movies', to: 'movies#popular'
    get '/popular/genres', to: 'genres#popular'

    # TMDB GENRE LIST
    get '/tmdb_genres', to: 'genres#tmdb_genres'
    
#Create a review for a movie
post 'movies/:id/reviews', to: 'reviews#create'

#get all reviews for preWatched movies
get 'movies/:id/prewatched', to: 'reviews#preWatched'
#get 'movies/:id/reviews/pre', to: 'reviews#preWatched'
   
  end 
    get '*other', to: 'static#index'
end
