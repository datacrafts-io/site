require 'sinatra'
require 'sprockets'
require 'bootstrap'

enable :logging

class LandingApp < Sinatra::Base
  set :environment, Sprockets::Environment.new

  puts "!!!!!!!!!!!!!!!!!!!"

  environment.append_path 'assets/stylesheets'
  environment.append_path 'assets/javascripts'

  environment.js_compressor  = :uglify
  environment.css_compressor = :sass
  puts environment.inspect

  get '/assets/*' do
    env['PATH_INFO'].sub!('/assets', '')
    settings.environment.call(env)
  end

  get '/' do
    slim :index
  end
end
