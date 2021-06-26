// Inheritance is the Main Pillar in Object oriented Programming
// one class can inherit/ acquire the properties or methods of another class
// the class which inherits the props of other is known as subclass (or derived class or child class )
// the class whose properties are inherited is known as superclass or parent class
const Person = require("./basics7")
class Pet extends Person //if i want inherit proper of parent "person class" declared elsewhere use "exten"
{
    get location()  //you can override the prop in child class if diff from parent class
        {
            return "BlueCross"
         }
    constructor(firstName, lastName) 
    {
        super(firstName, lastName)   //have to call parent class constructor first thing
    }
}
let pet = new Pet("sam","pup")
pet.fullName()
console.log(pet.location)
