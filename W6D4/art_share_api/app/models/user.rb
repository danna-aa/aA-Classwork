# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  username   :string           not null
#

class User < ApplicationRecord
  validates :username, presence: true

  has_many :artworks, foreign_key: :artist_id, class_name: :Artwork, dependent: :destroy
  has_many :artwork_shares, foreign_key: :viewer_id, class_name: :ArtworkShare, dependent: :destroy
  has_many :shared_artworks, through: :artwork_shares, source: :artwork
  has_many :comments, foreign_key: :commenter_id, class_name: :Comment, dependent: :destroy
  has_many :likes
  has_many :liked_comments, through: :likes, source: :likeable, source_type: 'Comment'
  has_many :liked_artworks, through: :likes, source: :likeable, source_type: 'Artwork'
end
