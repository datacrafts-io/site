Datacrafts::Application.routes.draw do
  get 'services' => 'services#index'
  get 'contacts' => 'contacts#index'
  get 'team'     => 'team#index'

  root 'welcome#index'
end
