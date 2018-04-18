Rails.application.routes.draw do
  scope '/api' do
    get '/signup', to: 'users#new'
    post '/signup', to: 'users#create'
    get '/activate/:token', to: 'users#edit', as: 'activate'
    get '/login', to: 'users#index'
    post '/login', to: 'users#login'
  end

  get 'users/show'


  root 'index#index'
  get "/*path" => "index#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
