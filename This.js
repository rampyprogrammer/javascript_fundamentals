/* "this" : In JavaScript, the this keyword refers to the context
 in which a function is executed or an object is accessed. It allows 
 you to access the current object or the object that a method belongs
  to. The value of this is determined dynamically at runtime based 
  on how a function is called or a method is invoked.*/


//sample example
const person = {
    name: 'John',
    sayHello: function() {
      console.log('Hello, ' + this.name + '!');
    }
  };
  
  person.sayHello(); // Output: 'Hello, John!'
  


// why "this" keyword
// example :-
const laptop1={
    cpu : 'i6',
    model : 'hp',
    price :36000,

    run : function (){
        console.log(this.cpu);
    }
}
laptop1.run()


const laptop2={
    cpu : 'i9',
    model : 'apple',
    price :150000,

    compare : function(other){
        if(this.cpu>other.cpu){
            console.log(this);
        
        }
        else {
            console.log(other);
        }

    }
    
}
laptop2.compare(laptop1)
