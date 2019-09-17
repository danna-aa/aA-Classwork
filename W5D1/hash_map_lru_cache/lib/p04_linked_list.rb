class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def inspect
    self.to_s
  end

  def remove
    previous_node = self.prev
    next_node = self.next
    previous_node.next = next_node
    next_node.previous = previous_node
    self.next, self.prev = nil, nil
  end
end

class LinkedList

  include Enumerable

  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
  end

  def last
  end

  def empty?
    @head.next == @tail 
  end

  def get(key)
  end

  def include?(key)
  end

  def append(key, val)
    previous_node = @tail.prev
    node = Node.new(key, val)
    @tail.prev = node
    node.next = @tail
    previous_node.next = node
    node.prev = previous_node
  end

  def update(key, val)
  end

  def remove(key)

  end

  def each
    current_node = @head.next
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end
