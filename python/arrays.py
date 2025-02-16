# #Q1

# list1=[2000,2350,2600,2130,2190]
# listm=["january","february","march","april","may"]
# #1 In Feb, how many dollars you spent extra compare to January?

# extra= list1[1]- list1[0]
# print(extra)

# #2. Find out your total expense in first quarter (first three months) of the year.
# quar=0
# for i in range(3):
#     quar+= list1[i]

# print(quar)

# #3 Find out if you spent exactly 2000 dollars in any month


# for x in range(len(list1)):
#     if list1[x]==2000:
#         print(listm[x])

# #44. June month just finished and your expense is 1980 dollar. Add this item to our monthly expense list

# list1.append(1980)
# print(list1)

# #5 5. You returned an item that you bought in a month of April andgot a refund of 200$. Make a correction to your monthly expense list based on this






#Q2
# # You have a list of your favourite marvel super heros.
# heros=['spider man','thor','hulk','iron man','captain america']
# # Using this find out,

# # 1. Length of the list
# print(len(heros))

# # 2. Add 'black panther' at the end of this list
# heros.append("black panther")
# # 3. You realize that you need to add 'black panther' after 'hulk',
# #    so remove it from the list first and then add it after 'hulk'
# heros.pop()
# heros.append("hulk")
# heros.append("black panther")
# print(heros)
# # 4. Now you don't like thor and hulk because they get angry easily :)
# #    So you want to remove thor and hulk from list and replace them with doctor strange (because he is cool).
# #    Do that with one line of code.
# heros[1:3]=["doctor strange"]
# # 5. Sort the heros list in alphabetical order (Hint. Use dir() functions to list down all functions available in list)
# # print(dir(list))

# heros.sort()
# print(heros)




#Q3 Create a list of all odd numbers between 1 and a max number. Max number is something you need to take from a user using input() function


maxno=int(input("ENter a number"))

list2=[]
for i in range(1,maxno):
    if i%2!=0:
        list2.append(i)
print(list2)