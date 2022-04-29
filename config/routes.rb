Rails.application.routes.draw do
  # generates all devise routes
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
   namespace :api do 
    resources :movies do
      resources :casts
    end
    resources :reviews
    resources :roles
    resources :users
    resources :genres
      # , except: :show

    put '/update_image', to: "users#update_image"

    get 'all_users', to: 'movies#all_users'

    # GRABS RATINGS FOR WATCHED/UNWATCHED
    get 'movies/:id/watched', to: 'reviews#watched'
    get 'movies/:id/unwatched', to: 'reviews#unwatched'

    # TOP 3 AND TOP 10 POTATOES/FRIES BASED ON SCORES
    get 'top/potatoes', to: 'movies#topPotatoes'
    get 'top/fries', to: 'movies#topFries'
    get 'pagetoppotatoes', to: 'movies#pageTopPotatoes'
    get 'pagetopfries', to: 'movies#pageTopFries'

    # NEWEST MOVIES BY DATE
    get 'newest', to: 'movies#newest'

    # get 'genres/:name', to: 'genres#genre_show'
    get 'genres/:id', to: 'genres#show'

    # MOST POPULAR MOVIES AND GENRES
    get '/popular/movies', to: 'movies#popular'
    get '/popular/genres', to: 'genres#popular'

    # TMDB GENRE LIST
    get '/tmdb_genres', to: 'genres#tmdb_genres'

    get 'movies/:id/reviews', to: 'reviews#index'
    
    #Create a review for a movie
    post 'movies/:id/reviews', to: 'reviews#create'

    # API Calls for Pre Reviews and Post Reviews based on Movie id
    get 'movies/:id/reviews/pre', to: 'reviews#pre'
    get 'movies/:id/reviews/post', to: 'reviews#post'


    get 'movies/:id/videos', to: 'movies#videos'

    get 'movies/:id/cast', to:'casts#index'

    get 'reviews/:id', to: 'reviews#show'
   
  end 
    get '*other', to: 'static#index'
end
