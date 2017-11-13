# config valid only for current version of Capistrano
lock '3.10.0'

set :application, 'datacrafts_landing'
set :repo_url, 'git@github.com:datacrafts-io/site.git'
set :branch, (ENV['BRANCH'] || 'master')

set :default_environment, {
  'PATH' => "$HOME/.rbenv/shims:$HOME/.rbenv/bin:$PATH"
}

set :pty, true
set :ssh_options, forward_agent: true

server 'dev.datacrafts.io', user: 'crafter', port: 22032, roles: %w{app web db}

set :unicorn_pid, -> { "#{shared_path}/tmp/pids/unicorn.pid" }
set :unicorn_conf, -> { "#{current_path}/config/unicorn/#{fetch(:rails_env)}.rb" }

set :rvm_type, :auto
set :log_level, :debug

set :linked_dirs, fetch(:linked_dirs, []) + %w(
  log
  tmp/pids
  tmp/sockets
)

after 'deploy:publishing', 'deploy:restart'
after 'deploy:publishing', 'deploy:assets_precompile'

namespace :landing do
  desc "Set up config files (first time setup)"
  task :setup do
    on roles(:app) do
      execute "mkdir -p #{shared_path}/tmp/pids"
      execute "mkdir -p #{shared_path}/tmp/sockets"
    end
  end
end

namespace :deploy do
  task :restart do
    invoke 'unicorn:legacy_restart'
  end

  task :assets_precompile do
    sh 'sass --sourcemap=none --update assets/stylesheets/app.scss:public/assets/app.css'
  end
end
