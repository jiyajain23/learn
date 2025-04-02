# You are required to create a Python function to extract all occurrences of a specific pattern (e.g., dates in the format MM/DD/YYYY) from a given text using regular expressions and quantifiers.
# Input:
# The input will consist of a string representing the text.
# Output:
# Return a list containing all occurrences of the specified pattern found in the text.
# Sample Input:
# Today is 03/26/2024 and tomorrow is 03/27/2024.
# Sample Output:
# 03/26/2024, 03/27/2024
# import re
#
# stri = input()
#
#
# def patt(string):
#     pattern = "../../...."
#     x = re.findall(pattern, string)
#     for i in x:
#         print(i)
#
#
# print(patt(stri))


# You are required to create a Python class to represent a bank account, and use the assert statement to ensure that the initial balance is non-negative.
# Input:
# The input will consist of a single integer representing the initial balance of the bank account.
# Output:
# The output will be either "Assertion Error" if the initial balance is negative, or "Assertion Passed" if the initial balance is non-negative.
# Sample Input:
# 1000
# Sample Output:
# Assertion Passed

class BankBalance:
    def __init__(self, bb):
        self.bb = bb

    def check(self):
        assert self.bb >= 0,"Assertion Error"
        if self.bb >= 0:
            print("Assertion Passed")


a = int(input())
b= BankBalance(a)
b.check()
