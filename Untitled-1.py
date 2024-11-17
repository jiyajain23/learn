def double_letters(s):
    l1 = list(s)  # Convert the string to a list of characters
    result = []   # Initialize an empty list for the result
    
    for char in l1:
        result.append(char)  # Add the character once
        result.append(char)  # Add the character again (double it)
    
    return ''.join(result)  # Convert the list back to a string

# Example usage
print(double_letters("hello"))
