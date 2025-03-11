#Q1 You are required to create a class to represent a rectangle with attributes like length and width. Write methods to calculate the area and perimeter of the rectangle.

# Input:
# The input will consist of two integers, representing the length and width of the rectangle, respectively.
# Output:
# For each method call, return the calculated area and perimeter of the rectangle.
# Sample Input:
# 5 3
# Sample Output:
# 15

class Rectangle:
    def __init__(self,length,breadth):
        self.length=length
        self.breadth=breadth
    def area(self):
        ar=self.length * self.breadth
        print(ar)
    def peri(self):
        per=2*(self.length+self.breadth)
        print(per)


x,y=map(int, input().split())
rec=Rectangle(x,y)
rec.area()
rec.peri()

# Q2 You are required to write a Python function to divide two numbers. Handle the ZeroDivisionError exception that may occur when the divisor is zero.
# Input:
# The input will consist of two integers, representing the dividend and divisor.
# Output:
# Return the result of dividing the dividend by the divisor. If the divisor is zero, handle the exception and return "Cannot divide by zero".
# Sample Input:
# 10 2
# Sample Output:
# 5.0
def divide():
    end,sor=map(int,input().split())
    try:
        ans= end/sor
        print(ans)
    except ZeroDivisionError:
        print("Cannot be divided by zero")

divide()