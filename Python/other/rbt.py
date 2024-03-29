class Color:
    RED = 0
    BLACK = 1
 
class RedBlackTree:
 
    def __init__(self, left, value, right, color=Color.RED):
        self._color = color
        self._left = left
        self._right = right
        self._value = value
        self._count = 1 + len(left) + len(right)
 
 
    def __len__(self):
        return self._count
 
    @property
    def color(self):
        return self._color
 
    @property
    def value(self):
        return self._value
 
 
    @property
    def right(self):
        return self._right
 
    @property
    def left(self):
        return self._left
 
    def blacken(self):
        if self.is_red():
            return RedBlackTree(self.left, self.value, self.right, color=Color.BLACK,)
        return self
 
    def is_empty(self):
        return False
 
    def is_black(self):
        return self._color == Color.BLACK
 
    def is_red(self):
        return self._color == Color.RED
 
    def rotate_left(self):
 
        return RedBlackTree(
            RedBlackTree(self.left, self.value, EmptyRedBlackTree().update(self.right.left),color=self.color,),
            self.right.value,
            self.right.right,
            self.right.color,
        )
 
    def rotate_right(self):
 
        return RedBlackTree(
            self.left.left,
            self.left.value,
            RedBlackTree(
                EmptyRedBlackTree().update(self.left.right),
                self.value,
                self.right,
                self.color,
            ),
            self.left.color,
        )
 
    def recolored(self):
        return RedBlackTree(
            self.left.blacken(),
            self.value,
            self.right.blacken(),
            Color.RED,
        )

    def balance(self):
        
        if self.is_red():
            print(f'Value: {self.value}, color: RED')
            return self
        else: 
            print(f'Value: {self.value}, color: BLACK')
 
        if self.left.is_red():
            if self.right.is_red():
                return self.recolored()
            if self.left.left.is_red():
                return self.rotate_right().recolored()
            if self.left.right.is_red():
                return RedBlackTree(
                    self.left.rotate_left(),
                    self.value,
                    self.right,
                    color=self.color,
                ).rotate_right().recolored()
            return self
 
        if self.right.is_red():
            if self.right.right.is_red():
                return self.rotate_left().recolored()
            if self.right.left.is_red():
                return RedBlackTree(
                    self.left,
                    self.value,
                    self.right.rotate_right(),
                    color=self.color,
                ).rotate_left().recolored()
        return self
 
    def update(self, node):
        if node.is_empty():
            return self
        if node.value < self.value:
            return RedBlackTree(
                self.left.update(node).balance(),
                self.value,
                self.right,
                self.color,
            ).balance()
 
        else:
            k = self.right.update(node).balance()
            print("Reballance")
            return RedBlackTree(self.left, self.value,k ,self.color,).balance()

    def insert(self, value):
        return self.update(RedBlackTree(EmptyRedBlackTree(),value,EmptyRedBlackTree(),color=Color.RED,)).blacken()
 
    def is_member(self, value):
        if value < self._value:
            return self.left.is_member(value)
        if value > self._value:
            return self.right.is_member(value)
        return True
 
 
class EmptyRedBlackTree(RedBlackTree):
 
    def __init__(self):
        self._color = Color.BLACK
 
    def is_empty(self):
        return True
 
    def insert(self, value):
        return RedBlackTree(
            EmptyRedBlackTree(),
            value,
            EmptyRedBlackTree(),
            Color.RED,
        )
 
    def update(self, node):
        return node
    
    def is_member(self, value):
        return False
 
    @property
    def left(self):
        return EmptyRedBlackTree()
 
    @property
    def right(self):
        return EmptyRedBlackTree()
 
    def __len__(self):
        return 0



n = EmptyRedBlackTree()
n = n.insert(5)
n = n.insert(6)
n = n.insert(7)
n = n.insert(77)
n = n.insert(45)
n = n.insert(50)
n = n.insert(20)
n = n.insert(99)
