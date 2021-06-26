//block of code
//scope of VAR is global or in functional loop only, can be reinitialized
//scope of LET is global or in block level {}, can be reinitialized
//scope of CONST - global or in block But cannot be reinitiliazed

function add(a,b) //add is name of function and add parameters below
{
return a+b
}
let sum = add(2,3)
console.log(sum)

let sumOfInt = function(c,d)
{
    return c+d
}
// anon functions => do not have name - function expressions- and they can be assigned to variables
let sumOfInts= (c,d)=> c+d
console.log(sumOfInts(2,3))