# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all
Comment.destroy_all
# Like.destroy_all

user1 = User.create!(username: "isomdurm")
user2 = User.create!(username: "danna")
user3 = User.create!(username: "corgi")
user4 = User.create!(username: "neko")

artwork1 = Artwork.create!(title: "Mona Lisa", image_url: "mona_lisa.com/image.png", artist_id: user1.id, favorite: user2.id)
artwork2 = Artwork.create!(title: "Starry Night", image_url: "starry_night.com/image.png", artist_id: user2.id, favorite: user1.id)
artwork3 = Artwork.create!(title: "The Scream", image_url: "the_scream.com/image.png", artist_id: user3.id, favorite: user4.id)
artwork4 = Artwork.create!(title: "The Kiss", image_url: "the_kiss.com/image.png", artist_id: user4.id, favorite: user3.id)
artwork5 = Artwork.create!(title: "American Gothic", image_url: "american_gothic.com/image.png", artist_id: user1.id, favorite: user4.id)

artworkShare1 = ArtworkShare.create!(artwork_id: artwork1.id, viewer_id: user2.id)
artworkShare2 = ArtworkShare.create!(artwork_id: artwork2.id, viewer_id: user3.id)
artworkShare3 = ArtworkShare.create!(artwork_id: artwork1.id, viewer_id: user4.id)
artworkShare4 = ArtworkShare.create!(artwork_id: artwork4.id, viewer_id: user2.id)
artworkShare5 = ArtworkShare.create!(artwork_id: artwork3.id, viewer_id: user1.id)
artworkShare6 = ArtworkShare.create!(artwork_id: artwork2.id, viewer_id: user1.id)

comment1 = Comment.create!(commenter_id: user1.id, artwork_id: artwork2.id, body: "so starry")
comment2 = Comment.create!(commenter_id: user2.id, artwork_id: artwork1.id, body: "very lisa")
comment3 = Comment.create!(commenter_id: user1.id, artwork_id: artwork2.id, body: "much night")
comment4 = Comment.create!(commenter_id: user4.id, artwork_id: artwork3.id, body: "all the screams")
comment5 = Comment.create!(commenter_id: user3.id, artwork_id: artwork4.id, body: "oh my, kissing")
comment6 = Comment.create!(commenter_id: user2.id, artwork_id: artwork5.id, body: "basic bitches")

like1 = Like.create!(user_id: user1.id, likeable_id: comment2.id, likeable_type: "Comment")
like2 = Like.create!(user_id: user2.id, likeable_id: comment1.id, likeable_type: "Comment")
like3 = Like.create!(user_id: user1.id, likeable_id: comment3.id, likeable_type: "Comment")
like4 = Like.create!(user_id: user4.id, likeable_id: artwork3.id, likeable_type: "Artwork")
like5 = Like.create!(user_id: user3.id, likeable_id: artwork1.id, likeable_type: "Artwork")
like6 = Like.create!(user_id: user2.id, likeable_id: artwork5.id, likeable_type: "Artwork")
