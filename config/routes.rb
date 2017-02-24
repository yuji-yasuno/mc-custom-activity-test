Rails.application.routes.draw do
  root to: 'home#index'
  get 'home/index'

  post '/execute', to: 'interaction#execute'

  post '/save', to: 'interaction#save'

  post '/publish', to: 'interaction#publish'

  post '/validate', to: 'interaction#validate'

  post '/edit', to: 'interaction#edit'

  post '/stop', to: 'interaction#stop'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
