require 'sinatra'
require 'sprockets'

enable :logging

class LandingApp < Sinatra::Base
  set :environment, Sprockets::Environment.new

  environment.append_path 'assets/stylesheets'
  environment.append_path 'assets/javascripts'

  environment.js_compressor  = :uglify
  environment.css_compressor = :sass

  get '/assets/*' do
    env['PATH_INFO'].sub!('/assets', '')
    settings.environment.call(env)
  end

  get '/' do
    slim :index
  end
end
