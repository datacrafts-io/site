require 'dotenv/load'
require 'sinatra/base'
require 'sinatra/asset_pipeline'
require 'sinatra/flash'
require 'bootstrap'
require 'slack-notifier'

class LandingApp < Sinatra::Base
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

    message = "*Name:* #{ params[:name] }\n"
    message += "*Email:* #{ params[:email] } \n"
    message += "*Message:* #{ params[:message] }"

    header + Slack::Notifier::Util::Escape.html(message)
  end

  def notifier
    @notifier ||= Slack::Notifier.new(ENV['SLACK_URL'])
  end

  def params_valid?
    !params[:name].empty? && !params[:email].empty? && !params[:message].empty?
  end
end
