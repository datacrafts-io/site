deploy_to = '/home/crafter/staging.datacrafts_landing'
rack_root = "#{deploy_to}/current"
pid_file = "#{deploy_to}/shared/tmp/pids/unicorn.pid"
socket_file= "#{deploy_to}/shared/tmp/sockets/unicorn.sock"
log_file = "#{rack_root}/log/unicorn.log"
err_log = "#{rack_root}/log/unicorn_error.log"

timeout 30
worker_processes 2
listen socket_file, backlog: 1024

pid pid_file
stderr_path err_log
stdout_path log_file

# Force the bundler gemfile environment variable to
# reference the capistrano "current" symlink
before_exec do |_|
  ENV['BUNDLE_GEMFILE'] = File.join(rack_root, 'Gemfile')
end
