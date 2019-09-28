  #  t.date "birth_date", null: false
  #   t.string "color", null: false
  #   t.string "name", null: false
  #   t.string "sex", limit: 2, null: false
  #   t.text "description", null: false
class Cat < ApplicationRecord

  validates :birth_date, :color, presence: true
end
