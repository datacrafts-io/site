require 'sinatra'

enable :logging

class LandingApp < Sinatra::Base
  get '/' do
    'We are Datacrafts, yeah!'
  end
end
