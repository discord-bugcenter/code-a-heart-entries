import sys
x=int(sys.argv[1])
g,i,r="* \n"
m,n,v,a=(g*(x*5+4)+r)*x,x*2,x*5,0
while v>0:
  z=a+2
  if n>0:m=i*z+g*n+i*(x+a*2)+g*n+i*z+r+m
  m+=i*z+g*v+r
  a+=2
  n-=4
  v-=4
print(m)

# User: 563749920683720709
# Length: 175
# Winner!
