Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#index'
  root to: 'home#index'
    get 'auth/:provider/callback',  to: 'sessions#create'
    get 'logout', to: 'sessions#destroy'

    namespace "api" do
      namespace "v1" do
        resources :users, param: :login, only: [:index, :show]
        resources :itineraries, only: [:index]

        get "/current-user", to: "users#user"

        #all itineraries for one user
        get "users/:user_slug/itineraries", to: "itineraries#user_itineraries_index"

        #one specific itinerary for a user
        get "users/:user_slug/itineraries/:itinerary_slug", to: "itineraries#show"

        #CREATE
        post "users/:user_slug/itineraries/:itinerary_slug/days", to: "days#create"
      end
    end
  get "*path", to: "static_pages#index"

end
