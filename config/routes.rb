Rails.application.routes.draw do
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'
  get '/activate/:token', to: 'users#edit', as: 'activate'

  get 'users/show'

  get 'users/login'

  root 'index#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
