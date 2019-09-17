class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    unless self.empty?
      self.inject { |acc, ele| acc.to_i.hash ^ ele.to_i.hash }
    else
      self.sum.to_i.hash
    end
  end
end

class String
  def hash
    alpha = ("a".."z").to_a
    arr = self.split("")
    arr.map! { |char| alpha.index(char) }
    arr.hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    keys = self.keys
    values = self.values
    keys.map! { |key| key.to_s.hash }
    values.map! { |value| value.hash }
    keys.sum + values.sum
  end
end
