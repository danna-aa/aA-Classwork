class BandsController < ApplicationController
  def index
    @bands = Band.all
    render :index
  end

  def new
    render :new
  end

  def create
    @band = Band.new(band_params)
    if @band.save
      redirect_to bands_url
    else
      flash.now[:errors] = 'NOT BAND. NAME SUCKS.'
      render :new
    end
  end
  
  def edit
    render :edit
  end
  
  def show
    @band = Band.find(params[:id])
    render :show
  end

  def update
    @band = Band.find(params[:id])
    if @band.update(band_params) 
      redirect_to bands_url
    else
      flash.now[:errors] = "changes NOT accepted"
      render :edit
    end
  end

  def destroy
    @band = Band.find(params[:id])
    @band.destroy 
    redirect_to bands_url
  end


  private
  def band_params
    params.require(:band).permit(:name)
  end
  
end
