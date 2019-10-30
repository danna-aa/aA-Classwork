class Api::PokemonController < ApplicationController

  def index 
    @pokemon = Pokemon.all
    render :index 
  end

  def show
    @poke = Pokemon.find(params[:id])
    render :show
  end

  def poke_params
    params.require(:poke).permit()
  end

end
