Rails.application.routes.draw do
  get 'users/create'

  get 'users/show'

  get 'users/login'

  root 'index#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
