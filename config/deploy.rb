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

set :rvm_type, :auto
set :log_level, :debug

set :linked_files, fetch(:linked_files, []) + %w(
  .env
)

after 'deploy:publishing', 'deploy:restart'

namespace :puma do
  desc 'Create Directories for Puma Pids and Socket'
  task :make_dirs do
    on roles(:app) do
      execute "mkdir #{shared_path}/tmp/sockets -p"
      execute "mkdir #{shared_path}/tmp/pids -p"
    end
  end

  before :start, :make_dirs
end

set :puma_bind,       "unix://#{shared_path}/tmp/sockets/#{fetch(:application)}-puma.sock"
set :puma_state,      "#{shared_path}/tmp/pids/puma.state"
set :puma_pid,        "#{shared_path}/tmp/pids/puma.pid"
set :puma_access_log, "#{release_path}/log/puma.error.log"
set :puma_error_log,  "#{release_path}/log/puma.access.log"

namespace :deploy do

  task :restart do
    invoke 'puma:restart'
  end

end
