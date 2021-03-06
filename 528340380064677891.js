function r(k,h){return k.repeat(h)}
let x=process.argv[2],g="*",y="\n",b=r(r(g,x*5+4)+y,x),n=x*2,a=0,v=x*5,i=" ",j;
for(;v>0;a+=2,n-=4,v-=4){
j=r(i,a+2)
if(n>0)b=j+r(g,n)+r(i,x*1+a*2)+r(g,n)+y+b
b+=j+r(g,v)+y
}
console.log(b)

// User: 528340380064677891
// Length: 226
