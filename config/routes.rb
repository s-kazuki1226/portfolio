Rails.application.routes.draw do
  root to: 'toppages#index'
  
  get 'pet_show', to: 'pet_show#index'
  
  get 'portfolio', to: 'portfolio#index'
  
  get 'recruit_game', to: 'recruit_game#index'
end
