require 'sinatra'

enable :logging

class Landing < Sinatra::Base
  get '/' do
    'We are Datacrafts, yeah!'
  end
end
