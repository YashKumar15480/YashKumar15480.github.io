print("Water Jug Problem")
x = int (input("Enter x = "))
y = int (input("Enter y = "))

while True:
  rno = int(input("Enter the rule no."))
  if rno == 1:
    if x<4:x=4    # filling x
  if rno == 2:
    if y<3:y=3    #filling y
  if rno == 3:
    if x>0:x=0
  if rno == 4:
    if y>0:y=0
  if rno == 5:
    if x+y>=4 and y>0:x,y=4,y-(4-x)
  if rno == 6:
    if x+y>=3 and x>0:x,y = x-(3-y),3
  if rno == 7:
    if x+y<=4 and y>0:x,y = x+y,0
  if rno == 8:
    if x+y<=3 and x>0:x,y = 0, x+y
  print("x=",x)
  print("y=",y)

  if(x==2):
    print("the result is a Goal State")
    break