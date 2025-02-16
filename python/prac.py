
def my_decorator(fun):
    def wrapper():
        print("before")
        fun()
        print("after")
    wrapper()
@my_decorator
def hello():
    print("Hello")


@my_decorator
def add():
    print("addition")

def genr():
    yield 1
    yield 2

x=genr()
print(next(x))
print(next(x))
