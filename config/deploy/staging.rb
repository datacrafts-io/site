set :stage,      :staging
set :rails_env,  :production

stage_dir = 'staging.datacrafts_landing'
set :rvm_ruby_version, "ruby-2.5.1@#{stage_dir}"
set :deploy_to, "/home/crafter/#{stage_dir}"
