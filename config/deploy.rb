set :application, 'io.datacrafts'
set :repo_url,    'git@bitbucket.org:cr0t/crafts-site.git'
set :branch,      'master'
set :deploy_to,   "/var/www/#{fetch(:application)}"

set :rvm_type,         :auto
set :rvm_ruby_version, 'ruby-2.0.0-p247@crafts-site'

set :log_level, :info

set :linked_files, %w{config/database.yml .env}
set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

set :keep_releases, 5

set :unicorn_init, "/etc/init.d/unicorn_#{fetch(:application)}"

namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      execute :sudo, fetch(:unicorn_init), :restart
    end
  end

  task :start do
    on roles(:app), in: :sequence, wait: 5 do
      execute :sudo, fetch(:unicorn_init), :start
    end
  end

  task :stop do
    on roles(:app), in: :sequence, wait: 5 do
      execute :sudo, fetch(:unicorn_init), :stop
    end
  end

  after :finishing, 'deploy:cleanup'

end
