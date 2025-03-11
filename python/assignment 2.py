# You are required to write a Python program to merge two dictionaries into a new dictionary
# Return a new dictionary that contains all the key-value pairs from both input dictionaries.
# Sample Input:
# {'a': 1, 'b': 2}
# {'c': 3, 'd': 4}

import ast
i1=input("enter")
d1= ast.literal_eval(i1)
print(d1)
i2=input("enter")
d2=ast.literal_eval(i2)
d3={}
d3.update(d1)
d3.update(d2)
# for x in d1:
#     d3[x]=d1[x]
# for y in d2:
#     d3[y] = d2[y]
print(d3)
