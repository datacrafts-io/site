module ApplicationHelper
  def is_active?(path)
    'active' if path == params[:controller]
  end
end
