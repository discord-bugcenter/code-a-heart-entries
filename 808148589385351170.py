import sys
x=int(sys.argv[1])
m,b="@ "
e,y,a=2,3*x-2,x+1
for i in range(int(x/2+0.5)):
  print(b*a+m*e+y*b+m*e)
  a-=2
  e+=4
  y-=4
k,e=5*x+4,2
print('\n'.join([m*k]*x))
k-=4
for i in b*(x+1):
  print(e*b+k*m)
  e+=2
  k-=4

# User: 808148589385351170
# Length: 218
