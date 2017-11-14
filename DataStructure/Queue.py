class Queue:
  
  def __init__(self):
    self.items = []
  
  def enqueue(self, item):
    self.items.insert(0, item)
    
  def dequeue(self, item):
    self.items.pop()
    
  def print_queue(self):
    print(self.items)
    
  def is_empty(self):
    return self.items == []
    
  def size(self):
    return len(self.items)
