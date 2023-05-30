

// Exercise 1 Section
console.log("EXERCISE 1,2,3:\n==========\n");
class Person {
    constructor(name, pets, residence, hobbies) {
      this.name = name;
      this.pets = pets;
      this.residence = residence;
      this.hobbies = hobbies;
    }
    info(){

    }
    soundOff(){

    }
    addHobby(hobby){
        this.hobbies.push(hobby);
    }
    removeHobby(hobby){
        this.hobbies = this.hobbies.filter(element => element !== hobby);
    }
    greeting(){
        return console.log("Hello fellow person!")
    }
}


//exercise 2

class Coder extends Person{
    
    constructor(name, pets, residence, hobbies){
        super(name, pets,residence,hobbies);
        this.occupation = "Full Stack Web Developer";

    }
    greeting(){
        return console.log("Always Be Coding");
    }
}

//exercise 3

const person1 = new Person("Josh", 2, "house",["camping","gaming"]);
const coder1 = new Coder("Heath",2,"none",["gaming","baseball"]);
console.log(person1);
person1.addHobby("gardening");
console.log(person1);
person1.removeHobby("gaming");
console.log(person1);
person1.greeting();
console.log(coder1);
coder1.greeting();

//exercise 4
console.log("EXERCISE 4 :\n==========\n");

class Calculator {
    constructor(result){
        this.result = 0;
    }
}