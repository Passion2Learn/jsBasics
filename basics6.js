//object is collection of properties.
//property can be defined in key -value pairs= key is string. value is any data type

let person = {
    firstName: "Tim",
    lastName: " Joe",
    age : 24,
    email: "abc@hotmail.com",
    fullName : function() //can also add methods & function
    {
      console.log(this.firstName + this.lastName )
    }

}
console.log(person.fullName()) //when calling functions use ()
console.log(person.lastName) //access property values -if object holds multiple properties you can call it this way with dot notation
console.log(person['lastName']) //calling using array notation

person.firstName = "Tim Dane"
console.log(person.firstName) //updates property by assigning value at runtime

person.gender = 'male' // add new prop at runtime
console.log(person)
delete person.gender //deleting new prop
console.log(person)

console.log('gender' in person) // check if property exists in object using IN
for (let key in person) //iterate using for loop
{
  console.log(person[key]) //to print all values of the js object
}