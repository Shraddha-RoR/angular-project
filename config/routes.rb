Rails.application.routes.draw do

  namespace :api do
    resources :users, only: [:create] do
      resources :projects, only: [:index, :create, :update, :destroy] do
        resources :tasks, only: [:index, :create, :update, :destroy] do
          resources :comments, only: [:index, :create, :update, :destroy]
        end 
      end 

       
    end
    post 'api_tokens', to: 'api_tokens#create'
    delete 'api_tokens', to: 'api_tokens#destroy'
  end

  root 'welcome#angular'

end
