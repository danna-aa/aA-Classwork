class SessionsController < ApplicationController

  # before_action :new, only: [:destroy]
  
  def new
    render :new
  end

  def create
    user_name = params[:user][:user_name]
    password = params[:user][:password]

    user = User.find_by_credentials(user_name, password)

    if user
      login(user)
      redirect_to cats_url
    else
      render json: ['Invalid user_name / password'], status: 401
      user.errors.full_messages
    end

  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to new_session_url
  end

end
