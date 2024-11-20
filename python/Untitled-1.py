# def double_letters(s):
#     l1 = list(s)  # Convert the string to a list of characters
#     result = []   # Initialize an empty list for the result
    
#     for char in l1:
#         result.append(char)  # Add the character once
#         result.append(char)  # Add the character again (double it)
    
#     return ''.join(result)  # Convert the list back to a string

def merged(d1,d2):
    d3=d1.update(d2)
    print(d3)

d4={1:"one"}
d5={2:"two"}


def is_prime(n):
    for i in range(2,n):
        if n%i==0:
            print("Not prime")
            break
           
        else:
            print("prime")
# is_prime(901)

def fn(frn,lsn):
    print(frn,'',lsn)

# fn('jiya','jain')


