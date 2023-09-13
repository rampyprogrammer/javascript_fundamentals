// /*static  : In JavaScript, the static keyword is used to define static 
// methods and static properties within a class. Static members are 
// associated with the class itself rather than instances of the class.
//  This means that you can access them directly on the class without 
//  needing to create an instance */



// //example1
// class math{
//     static multi(a,b){
//         return a*b
//     }
//     static PI = 3.133
// }
// console.log(math.multi(2,34));// Output : 68
// console.log(math.PI);// Output : 3.133

// //example2
// class myClass{
//     static staticMethod(){
//         console.log('hello i am static method');
//     }
//     instance(){
//         console.log('hello i am instance method');
//     }
// }

// myClass.staticMethod()
// const obj = new myClass()// hello i am static method
// obj.instance()  //hello i am instance method
//  myClass.instance()// TypeError: myClass.instance is not a function


 class Car{
    static numberOfcars =0 ;
    constructor(model){
        this.model = model
        Car.numberOfcars += 1;


    }
 }
 const car1= new Car('lombo')
 const car2= new Car('Ferrori')
 const car3= new Car('toyota')
 console.log(Car.numberOfcars);