json.pokemon do
  json.extract! @poke, :id, :name, :attack, :defense, :moves, :poke_type, :image_url, :item_ids
  json.image_url asset_path(@poke.image_url)
end

# json.extract! @poke, :item
json.items do
  @poke.items.each do |item|
    json.set! item.id do 
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end  
end