#Kevin Andrade
#Case Study
#Intro to Data
#8/25/22

def swap(list,num):
    '''function swaps values of 2 variables or list element'''
    temp = list[num] 
    list[num] = list[num+1] 
    list[num+1] = temp 

#===================================================

def mySort(list1,list2,list3,list4):
    '''sorts a list from lowest to highest'''
    num = len(list4)
    for y in range (0,num):
        for x in range (0, num-1):
            if (list1[x] > list1[x+1]):
                swap(list1,x)
                swap(list2,x)
                swap(list3,x)
                swap(list4,x)

#===============================================

hhczid = []
hhcity = []
hhincm = []

import csv
with open('HouseholdIncome.csv') as csvfile:
    income = csv.reader(csvfile)
    for row in income:
        hhczid.append(row[0])
        hhcity.append(row[1])
        hhincm.append(row[2])
    csvfile.close()

gradrt = []
gradid = []
gradst = []
with open('GraduationRate.csv') as csvfile:
    GradRate = csv.reader(csvfile)
    for row in GradRate:
        for x in hhczid:
            if(row[0] == x[0]):
                gradrt.append(row[2])
csvfile.close()


mySort(hhincm,hhcity,hhczid,gradrt)

with open ('OrderedHHIncome.csv', 'w') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(hhczid)
    writer.writerow(hhcity)
    writer.writerow(hhincm)
    writer.writerow(gradrt)
csvfile.close()

length = len(gradrt)
for x in range(0,length):
    print(hhincm[x],hhcity[x],hhczid[x],gradrt[x])