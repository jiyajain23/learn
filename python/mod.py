import csv 
# with open("people.csv","w") as ppl:
#     wr=csv.writer(ppl)
#     field={'NAME','AGE'}
#     wr.writerow(field)
#     p1={'viraaj jain', 10}
#     wr.writerow(p1)
with open("people.csv","r") as ppl:
    re=csv.reader(ppl,skipinitialspace=True)
    for i in re:
        print(i)




# def maxlist(l1):
#     import math
#     x=0
#     for i in l1:
#         if i>0 and i>x:
#             x=i
#         else:
#             continue
#     return x

# l2=[13,20,30,50,3]
# print(maxlist(l2))
