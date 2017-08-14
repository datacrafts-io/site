source 'https://rubygems.org'

gem 'sinatra'

group :development do
  gem 'thin'
  gem 'capistrano', require: false
  gem 'capistrano-bundler', require: false
  gem 'capistrano-rvm', require: false
  gem 'capistrano3-unicorn', require: false
end

group :production do
  gem 'unicorn'
end
