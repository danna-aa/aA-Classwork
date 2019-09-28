# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(2)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# require 'date'

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper

  validates :color, inclusion: {in: %w(black white orange brown)}
  validates :sex, inclusion: {in: %w(M F)}
  validates :birth_date, :color, :name, :sex, :description, presence: true

  def age
    age = Time.now.year - self.birth_date.year
    age -= 1 if Date.today < self.birth_date + age.years
    age
  end

end
