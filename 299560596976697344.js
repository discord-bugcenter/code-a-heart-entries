let d=Number(process.argv[2]),a="$".repeat(d+4*(d+1)),b=1,c=1,e=[],f=a.length,i
for(i=0;![4,8].includes(f-4*b-d-4*(b-1));i++)b++
for(i=b;i>0;i--)e.push("  ".repeat(i)+"$".repeat((f-4*i-d-4*(i-1))/2)+" ".repeat(d+4*(i-1))+"$".repeat((f-4*i-d-4*(i-1))/2))
for(i=0;i<d;i++)e.push(a)
for(i=1;f-4*i>0;i++)e.push("  ".repeat(i)+"$".repeat(f-4*i)+"  ".repeat(i))
console.log(e.join("\n"))

// User: 299560596976697344
// Length: 381
