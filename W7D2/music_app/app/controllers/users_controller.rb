class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      session[:session_token] = @user.session_token
      redirect_to user_url(@user.id) #params[:id]
    else
      flash.now[:errors] = 'NO'
      render :new
    end
  end

  def new
    # debugger
    # @user = User.new(user_params)
    render :new
  end

  def show
    @user = User.find(params[:id])
    render :show
    # redirect_to user_url(@user.id)
  end
  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
