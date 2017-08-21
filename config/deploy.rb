# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'datacrafts_landing'
set :repo_url, 'git@github.com:datacrafts-io/site.git'
set :branch, (ENV['BRANCH'] || 'master')

set :default_environment, {
  'PATH' => "$HOME/.rbenv/shims:$HOME/.rbenv/bin:$PATH"
}

set :pty, true
set :ssh_options, forward_agent: true

server 'dev.datacrafts.io', user: 'crafter', port: 22032, roles: %w{app web db}

set :unicorn_pid, "#{shared_path}/pids/unicorn.pid"
set :unicorn_conf, "#{current_path}/config/unicorn/#{fetch(:rails_env)}.rb"

set :rvm_type, :auto
set :log_level, :debug

after 'deploy:publishing', 'deploy:restart'

namespace :deploy do

  task :restart do
    invoke 'unicorn:reload'
  end

end
