module ApplicationHelper
  def is_active?(action)
    'active' if action == params[:controller]
  end
end
