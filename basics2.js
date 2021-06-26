
const flag = true

if(!flag)// value doesnt change but condition becomes not flag

{
console.log("condition satisfied")
}
else{
    console.log(flag)
    console.log("condition not satisfied")
}

/* let i = 0
while(i>10) //will not enter loop if condition isn't met -do while enters the loop once before checking condition again.
{ 
    i++ // which is same as i = i + 1
    console.log(i)
    console.log("i am in loop")// will run infinitely if no other condition present
} 
do
{
i++
}
while (i>10)
console.log(i)

for(let k=0; k<+10;k++) //for loop vs while loop. 
//we initialized variable,then gave a condition , and added the action in one single for block
//we use for loop when we know how many times we want to run the loop, but while loop can keep running till the condition is met
{
    console.log(k)  
}

let required= true
while(required) //loop executed only once because condition changed.
{
    console.log(required)
    required=false
}
/*/
// lets try to get numbers that are common multiple of 2 & 5 = 10
let n=0
for(let m=1;m<=100;m++)
{
    if(m%2 == 0 && m%5 == 0) // 2 conditions given
    {
        n++
    console.log(m)
    if (n==3)
    break
    }
}