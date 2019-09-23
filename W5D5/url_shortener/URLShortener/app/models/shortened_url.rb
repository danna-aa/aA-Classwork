# == Schema Information
#
# Table name: shortened_urls
#
#  id         :bigint           not null, primary key
#  long_url   :string           not null
#  short_url  :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShortenedUrl < ApplicationRecord

  def self.random_code
    generate = SecureRandom.urlsafe_base64
    until !ShortenedUrl.exists?(generate)
      generate = SecureRandom.urlsafe_base64
    end
    return generate
  end

  def self.create!(user, long_url)
    generated = ShortenedUrl.random_code
    ShortenedUrl.new(long_url: long_url, short_url: generated, user_id: user.id)
  end

  validates :long_url, :short_url, :user_id, presence: true
  validates :long_url, :short_url, uniqueness: true

  belongs_to :submitter,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end

user = User.new(name: 'Max', email: 'max@gmail.com')

