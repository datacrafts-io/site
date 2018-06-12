# config valid only for current version of Capistrano
lock '3.11.0'

set :application, 'datacrafts_landing'
set :repo_url, 'git@github.com:datacrafts-io/site.git'
set :branch, (ENV['BRANCH'] || 'landing')

set :pty, true
set :ssh_options, forward_agent: true

server '195.201.34.12', user: 'crafter', port: 22032, roles: %w{app web db}

set :rvm_type, :auto
set :log_level, :debug

set :linked_dirs, fetch(:linked_dirs, []) + %w(
  log
  tmp/pids
  tmp/sockets
)

after 'deploy:finishing', 'deploy:assets_precompile'

namespace :deploy do
  task :assets_precompile do
    on roles(:app) do
      within release_path do
        execute 'RACK_ENV=production rake assets:precompile'
      end
    end
  end
end
