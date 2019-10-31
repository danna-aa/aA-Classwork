class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username],
            params[:user][:password])
    if @user.nil?
      render json: ['FUcked up'], status: 401
    else
      login!(@user)
      render '/api/users/show'; #update later!
    end
  end



  def destroy
    if !logged_in?
      render json: ['Sign Out Error'], status: 404
    end
    logout! #incomplete
    render json: { message: 'Logout successful'}
  end

end
