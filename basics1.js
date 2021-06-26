//JS file
console.log('Hello');

// var, let, const(ES6)  <-- declare variables using these. const can't be reassigned. var can keep gettin new values. let can't be reused but can be reassigned.
let a=4;
console.log(a)
console.log(typeof(a))

let b=11.24
console.log(typeof(b))

let c = "Amina Khan"
console.log(typeof(c))

let required = true
console.log(typeof(required))
// null and undefined are 2 more data types in addition to number string n boolean.

c = a + b //reassigning is allowed with let) or switch between var and let
console.log(c)
//let c = a+b doesn't work //we can't redeclare variable with let keyword but possible with var
console.log(!required)


