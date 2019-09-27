# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  commenter_id :integer          not null
#  artwork_id   :integer          not null
#  body         :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Comment < ApplicationRecord
  belongs_to :commenter, foreign_key: :commenter_id, class_name: :User
  belongs_to :artwork, foreign_key: :artwork_id, class_name: :Artwork

  has_many :likes, :as => :likeable
end