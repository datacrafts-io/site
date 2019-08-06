require 'dotenv/load'
require 'sinatra/base'
require 'sinatra/asset_pipeline'
require 'sinatra/flash'
require 'bootstrap'
require 'slack-notifier'

require "sinatra/reloader"

class LandingApp < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
  end

  enable :sessions

  set :assets_paths, %w(assets assets/stylesheets assets/javascripts assets/images)

  register Sinatra::AssetPipeline
  register Sinatra::Flash

  get '/' do
    slim :index
  end

  post '/' do
    if params_valid?
      flash[:success] = "Thanks! We'll contact you ASAP."
      notifier.ping(slack_message)
    end

    redirect '/'
  end

  private

  def slack_message
    header = "<!here|here>\n"

    message = <<~TEXT
      *Name:* #{params[:name]}
      *Email:* #{params[:email]}
      *Message:* #{params[:message]}
    TEXT

    header + Slack::Notifier::Util::Escape.html(message)
  end

  def notifier
    @notifier ||= Slack::Notifier.new(ENV['SLACK_URL'])
  end

  def params_valid?
    params.values_at(:name, :email, :message).all?(&:present?)
  end
end
