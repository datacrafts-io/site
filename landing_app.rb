require 'sinatra/base'
require 'sinatra/asset_pipeline'
require 'sinatra/flash'
require 'bootstrap'

class LandingApp < Sinatra::Base
  enable :sessions

  set :assets_paths, %w(assets assets/stylesheets assets/javascripts assets/images)

  register Sinatra::AssetPipeline
  register Sinatra::Flash

  get '/' do
    slim :index
  end

  post '/' do
    flash[:success] = "Thanks! We'll contact you ASAP."
    redirect '/'
  end
end
