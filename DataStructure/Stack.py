clss Stack:
  def __init__(self):
    self.items = []
    self.max = 10       # Stack max size
    
  def push(self, item):
    if(len(self.items)<self.max):
      self.items.append(item)
    else:
      print("The stack is already full.")
      
  def pop(self):
    if(len(self.items)>0):
      self.items.pop()
    else:
      print("There is no element in the stack.")
      
  def print_stack(self):
    print(self.items)
    
  def peek(self):
    return self.items[len(self.items)-1]
    
  def is_empty(self):
    return self.items == []
   
  def size(self):
    return len(self.items)
