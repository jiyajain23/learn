import csv 
with open("peopl.csv","w") as ppl:
    wr=csv.writer(ppl)
    field={'NAME','AGE'}
    wr.writerow("field")
