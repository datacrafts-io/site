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
after 'deploy:finishing', 'deploy:assets_precompile'

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
    require 'sprockets'
    require 'bootstrap'
    require 'zlib'

    sprockets = Sprockets::Environment.new
    sprockets.append_path('assets/stylesheets')
    sprockets.append_path('assets/javascripts')

    sprockets.js_compressor  = :uglify
    sprockets.css_compressor = :sass

    build_dir = 'public/assets'
    %w( app.scss ).each do |bundle|
      asset      = sprockets.find_asset(bundle)
      asset_name = asset.pathname.basename.to_s.split('.')[0..1].join('.')
      asset_path = "#{build_dir}/#{asset_name}"

      asset.write_to(asset_path)

      Zlib::GzipWriter.open(asset_path + '.gz') do |gz|
        gz.mtime     = File.mtime(asset_path)
        gz.orig_name = asset_path
        gz.write(IO.binread(asset_path))
      end
    end

    invoke 'deploy:upload_assets'
  end

  task :upload_assets do
    on roles(:app) do
      within release_path do
        asset_full_path   = "#{release_path}/public/assets"
        asset_parent_path = File.dirname(asset_full_path)
        execute "mkdir -p #{asset_full_path}"
        upload! './public/assets', asset_parent_path, recursive: true
      end
    end

    run_locally do
      execute 'rm -r ./public/assets'
    end
  end
end
