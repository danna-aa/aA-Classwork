class AttrAccessorObject
  def self.my_attr_accessor(*names)
    names.each do |name|
      define_method(name) do
        self.instance_variable_get('@' + name.to_s)
      end

      define_method("#{name}=") do |new|
        instance_variable_set('@' + name.to_s, new)
      end
    end
  end
  
end
