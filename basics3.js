//ARRAY  is a container which stores elements
// let marks = Array(6) //arrage of 6 ;for 6 subjects/values of marks
// var marks = new Array(20,40,35, 12, 24) // below is the best way of writing array
var marks =[20,40, 35, 12, 24, 100]
console.log(marks[2]) // to access the value in the array

marks[3] = 14 // you can change value of array by using index
console.log(marks)
console.log(marks.length)

marks.push(65) //in order to add a new element to the array at the end
console.log(marks)
marks.pop() //deletes the last value in the array
console.log(marks)
marks.unshift(11) //adds element in the beginning of the array
console.log(marks)

//finding index of an element
//marks.indexOf(111) //this method gives you the value of the given index
console.log(marks.indexOf(11))

console.log(marks.includes(120)) //to check if 120 elemnt is present in the array
submarks = marks.slice(2,5) //to create a sub section of an array. shows index 2 till 4
console.log(submarks)
// shows all elements in array using index value as a condition
for(let i=0;i<marks.length; i++)
{
    console.log(marks[i])
}

//to sum all elem in array
var sum=0
for(let i = 0 ;i<marks.length; i++)
{
    //console.log(marks[in])
    sum = sum + marks[i]
    
}
console.log("*************")
console.log(sum)

//REDUCE FILTER MAP

//reduce method - iterates thru array just like for loop above
//marks.reduce((sum, mark)=>sum+ marks, 0) //takes 2 arguments
let total =marks.reduce((sum, mark)=>sum+ marks, 0) 
console.log(total)

//print even numbers from array above[12,14,16]
var scores = [12,13,14,16]
var evenScores = []
for(let i=0; i<scores.length;i++) //iterating thru every element
{
    if(scores[i] %2 == 0) //multiple of 2
        {
            evenScores.push(scores[i])
        }
}
console.log(evenScores)

//lets use filter method for printing even scores now
let newFilterEvenScores =scores.filter(score=>score%2==0) //whatever elements meets the given condition gets pushed into score variable
console.log(newFilterEvenScores)

//when we need to iterate and update values then use reduce TO ACCumulate. But if you want to filter like even or odd with conditions use filter.

//what is map array function- modifies each value of array to new value
//lets create new array with even numbers of scores and multiply each value with 3. then sum them.
console.log(evenScores)

let mappedArray =newFilterEvenScores.map(score=>score*3) 
console.log(mappedArray)
let totalVal = mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)

//lets use simple chaining to reduce lines of code
var scores1=[12,13,14,16]
let sumValue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue)

//sorting array with string and numbers
let fruits=["banana", "apple", "grape", "mango"] //make sure all string in lowercare or upper
fruits.sort()
console.log(fruits)
//lets merge together
console.log(fruits.sort())
console.log(fruits.reverse()) //reverse order sort

var scores2 =[12,13,19,16,14,003]
console.log(scores2.sort()) // doesnt work well with numbers

console.log(scores2.sort((a,b)=> a-b))
console.log(scores2.sort((a,b)=> b-a)) //reverse order sort