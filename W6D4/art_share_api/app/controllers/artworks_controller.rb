class ArtworksController < ApplicationController
  # def index
  #   render json: Artwork.all
  # end

  def index
    user_artworks = Artwork.where(artist_id: params[:user_id])
    shares = ArtworkShare.where(viewer_id: params[:user_id])
    render json: {user_artwork: user_artworks, shares: shares}
  end

  def create
    artwork = Artwork.new(user_params)
    if artwork.save
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: :unprocessable_entity
      # 422 is the status code for an unprocessable entity.
      # You can either pass the status code or status symbol.
      # In other words, you can also return:
      # render json: user.errors.full_messages, status: 422
    end
  end

  def show
    render json: Artwork.find(params[:id])
  end

  def destroy
    artwork = Artwork.find(params[:id])
    artwork.destroy
    render json: artwork
  end

  def update
    artwork = Artwork.find(params[:id])
    if artwork.update_attributes(artwork_params)
      render json: artwork
    else
      render json: artwork.errors, status: :unprocessable_entity
    end
  end

  def favorite
    artwork_share = ArtworkShare.find_by(id: params[:id], viewer_id: params[:user_id])
    artwork_share.favorite = true
    artwork_share.save
    render json: artwork_share
  end

  def unfavorite
    artwork_share = ArtworkShare.find_by(id: params[:id], viewer_id: params[:user_id])
    artwork_share.favorite = false
    artwork_share.save
    render json: artwork_share
  end



  private

  def artwork_params
    params.require(:artwork).permit(:title, :image_url, :artist_id)
  end
end
