require 'sinatra'
require 'sinatra/asset_pipeline'
require 'bootstrap'

enable :logging

class LandingApp < Sinatra::Base
  set :assets_paths, %w(assets assets/stylesheets assets/javascripts assets/images)

  register Sinatra::AssetPipeline

  get '/' do
    slim :index
  end
end
