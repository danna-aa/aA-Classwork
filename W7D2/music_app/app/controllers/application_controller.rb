class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?
  skip_before_action :verify_authenticity_token

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_in_user!(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!
  end

end
