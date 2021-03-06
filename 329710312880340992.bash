a=$((4+$1*5))

for i in $(seq $((2*$1%4)) 4 $(($1*2+1)))
do
  for k in $(seq 0 1)
  do
    for j in $(seq 0 $(((($a-$1)/2-$i)/2-2*$k))); do printf " "; done
    for j in $(seq 1 $i); do printf $; done  
    for j in $(seq 0 $(((($a-$1)/2-$i)/2-2))); do printf " "; done
    for j in $(seq 1 $1); do printf " "; done
  done
  echo
done

for i in $(seq $1 -1 1)
do
  for j in $(seq 1 $a); do printf $; done 
  echo
done

for i in $(seq 0 4 $a)
do
  for j in $(seq -1 $(($i/2))); do printf " "; done
  for j in $(seq 1 $(($a-$i-4))); do printf $; done  
  echo
done

# User: 329710312880340992
# Length: 563
