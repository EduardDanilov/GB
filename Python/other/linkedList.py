class Node:
    def __init__(self, data):
        self.data = data
        self.next_ref = None
        self.prev_ref = None


class WorkWithLinkedList:
    def __init__(self):
        self.start_node = None
    
    def insertAtStart(self, data):
        if self.start_node is None:
            new_node = Node(data)
            self.start_node = new_node
            return
        else:
            new_node = Node(data)
            new_node.next_ref = self.start_node
            self.start_node.prev_ref = new_node
            self.start_node = new_node
    
    def insertAtEnd(self, data):
        if self.start_node is None:
            new_node = Node(data)
            self.start_node = new_node
            return
        else:
            current_node = self.start_node
            new_node = Node(data)
            while current_node.next_ref is not None:
                current_node = current_node.next_ref
            current_node.next_ref = new_node
            new_node.prev_ref = current_node

    def findItem(self, value):
        if self.start_node is None:
            return "Список пуст"
        else:
            current_node = self.start_node
            counter = 0
            find = 0
            while current_node != None:
                counter +=1
                if current_node.data == value:
                    print(f"Значение найдено. Позиция в списке: {counter}")
                    find = 1
                    # Для выявления всех вхождений оставить break в комментарии
                    # Для поиска только первого вхождения раскомментировать break
                    break
                current_node = current_node.next_ref
            if find == 0: print('Значение не найдено в списке')

    def deleteItem(self, value):
        if self.start_node is None:
            print("Список пуст")
            return 
        if self.start_node.next_ref is None:
            if self.start_node.data == value:
                self.start_node = None
            else:
                print("Элемент для удаления не найден")
            return 

        if self.start_node.data == value:
            self.start_node = self.start_node.next_ref
            self.start_node.prev_ref = None
            return

        current_node = self.start_node
        while current_node.next_ref is not None:
            if current_node.data == value:
                break
            current_node = current_node.next_ref
        if current_node.next_ref is not None:
            current_node.prev_ref.next_ref = current_node.next_ref
            current_node.next_ref.prev_ref = current_node.prev_ref
        else:
            if current_node.data == value:
                current_node.prev_ref.next_ref = None
            else:
                print("Элемент не обнаружен")

    def printList(self):
        node = self.start_node
        while node is not None:
            print(node.data)
            node = node.next_ref

    def reverseList(self):
        if self.start_node is None:
            print("Список пуст")
            return 
        current_node = self.start_node
        next_node = current_node.next_ref
        current_node.next_ref = None
        current_node.prev_ref = next_node
        while next_node is not None:
            next_node.prev_ref = next_node.next_ref
            next_node.next_ref = current_node
            current_node = next_node
            next_node = next_node.prev_ref
        self.start_node = current_node


wll = WorkWithLinkedList()
wll.insertAtStart(50)
wll.insertAtStart(3)
wll.insertAtEnd(44)
wll.insertAtEnd(50)
print('Текущий список: ')
wll.printList()
print('')
print('Поиск ноды по значению')
wll.findItem(50)
print('')
print('Удаление ноды по значению')
wll.deleteItem(44)
print('Список без удаленной ноды:')
wll.printList()
print('')
print('Переворот списка')
wll.reverseList()
print('Перевернутый список:')
wll.printList()
