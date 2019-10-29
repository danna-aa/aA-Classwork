# json.array! @guests, :name, :age, :favorite_color

json.array! @guests.each do |guest|
  json.partial! 'guest', guest: guest
end