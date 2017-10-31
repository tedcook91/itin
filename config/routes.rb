Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#index'
  root to: 'home#index'
    get 'auth/:provider/callback',  to: 'sessions#create'
    get 'logout', to: 'sessions#destroy'

  get "*path", to: "static_pages#index"

end
