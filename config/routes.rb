Rails.application.routes.draw do
  post '/execute', to: 'interaction#execute'

  post '/save', to: 'interaction#save'

  post '/publish', to: 'interaction#publish'

  post '/validate', to: 'interaction#validate'

  post '/edit', to: 'interaction#edit'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
