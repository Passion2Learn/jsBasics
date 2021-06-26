// strings - also recognized like array. You can get substring or split or count of chars
const Person = require('./basics7')
let day = "tuesday "
console.log(day.length) // will count chars
let subDay= day.slice(0,4) //will slice to 4 chars
console.log(subDay)
console.log(day[1]) //finds the letter with index of 1


let splitDay=day.split("s") //breaks into 2 strings based on string before letter s and after letter s

console.log(splitDay[1]) //splitDay[1] will access the 2nd part of split string 
console.log(splitDay[1].length) 
console.log(splitDay[1].trim().length) 

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate)- parseInt(date) //converts string into a number
console.log(diff)
diff.toString() // converts number back to string.

let newQuote = day+"is Funday is not another day" //concatenate 2 strings
console.log(newQuote)

let val = newQuote.indexOf("day", 5)   //method indexOf- to find where char is present in the given variable
console.log(val)

let count = 0
let value = newQuote.indexOf("day") // to find how many times did "day occur in the string"
while(value!== -1)
{
    count++ //2
    value =newQuote.indexOf("day", value+1)
}
console.log(count)

let person = new Person ("Chris", "Edward") // we can now create object for the class in bsics7
console.log(person.fullName())