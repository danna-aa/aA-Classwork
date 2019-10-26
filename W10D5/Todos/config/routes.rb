Rails.application.routes.draw do
  # where to put this? 
  # 
  namespace :api do
    resources :todos, only: [:show ,:index, :create, :update, :destroy] , defaults: {format: :json}
  end
  
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
