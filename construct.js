/*constructor : 
In JavaScript, a constructor is a special method that is used for 
creating and initializing objects created from a class. It is called 
automatically when you create a new instance of a class using the 
new keyword. The purpose of a constructor is to set up the initial 
state (properties and values) of the object being created.*/

// example
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
  
  
// const john = new Person('John', 30);

// example 2 :
class Student{
    constructor(name,age,score){
        this.name = name
        this.age=age
        this.score = score

    }

    study(){
        console.log(`${this.name} was studying very hard and now he has scored ${this.score} Marks and he is just ${this.age} years hold ...`);

    }
}

const obj = new Student("rama",22,95)
obj.study()



