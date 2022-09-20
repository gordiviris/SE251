from statistics import mean
import numpy as np

xs = np.array([1,2,3,4,5], dtype=np.float64)
ys = np.array([5,4,6,5,6], dtype=np.float64)

print(mean(xs))
print(mean(ys))


#passing through list of x's and y's
def slope_mb(xs,ys):
    #finding the slope from the array of coords
    # slope = (avg of all x's * avg of all y's) - the avg of the 2 lists multiplied by each other 
    x1 = mean(xs) * mean(xs)
    y1 = mean(xs) * mean(ys)
    x2 = mean(xs * xs)
    y2 = mean(xs * ys)
    #actual slope formula
    m = (y1-y2)/(x1-x2)

    #finding b, b= avg of y's - (m * avg of x's)
    b = mean(ys) - m*mean(xs) 

    return m, b

m, b = slope_mb(xs,ys)
print(m)
print(b)

predLine = []
#for each x in xs list, do slpoe intercept formula and add result to predline list
for x in xs:
    y = (m*x)+b     #slope intercept form
    predLine.append(y) #append answer to list

#coords of the line are now (xs, predline)

#user input for x
predX = input("Enter future year: ")

#finding y based on user x
predY = (m * predX) + b

print(predY)

#user coords would be (predX, predY)