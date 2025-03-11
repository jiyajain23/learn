class Custom:

    def __init__(self,name,age):
        self.name= name
        self.age=age
    def greet(self):
        print(f'Hello {self.name} you are {self.age} years old')


a=Custom("Jiya",19)

a.greet()

