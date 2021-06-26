//class Person  //represent using class entity
//to export this class so public can use it use module.export
module.exports = class Person

//if you want to access property of any class you have to create object of that class then u can access by object.property
{
        age = 25 //this is a  class property will not change
        //location = "canada" (this is also be done as below use get)
        get location() //property getters
        {
            return "canada"
        }
//constructor is a method which executes by default when you create object of the class eg let person= new Person()
constructor(firstName, lastName) // if u want to change the info at runtime, have new fName and lName for every obj use instance vars
{
    this.firstName =firstName
    this.lastName =lastName //create new prop for this class to be able to use across the class
}
fullName() //use this method in class w/o get keyword etc
{
    console.log(this.firstName+this.lastName)
}
}

// let person= new Person("Tim", "Joseph") //create object outside class block
// //person.age //to access property of any class first create object then call prop
// let person1= new Person("Chris", "Jones")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())
