// PASSING AN OBJECT AS AN ARGUMENT TO FUNCTION
/*class Car{
    constructor(model,price,color){
        this.model = model
        this.price = price
        this.color = color

    }
}
const car1 =new Car('lamborgine',34000000,'red')
const car2 =new Car('FerrariF8',15000000,'blue')
const car3 =new Car('rangerover',20000000,'black')
// console.log(car1.model);
// console.log(car1.price);
// console.log(car1.color);
console.log("CAR ONE : -");
getit(car1)
console.log("CAR TWO : -");
getit(car2)
console.log("CAR THREE : -");
getit(car3)
function getit(car){
    console.log(car.model);
    console.log(car.price);
    console.log(car.color);
}*/
// SING AN OBJECT AS AN ARGUMENT TO FUNCTION
class Car{
    constructor(model,price,color){
        this.model = model
        this.price = price
        this.color = color

    }
    drive(){
        console.log(`i drive the ${this.model}`);
    }
}
const car1 =new Car('lamborgine',34000000,'red')
const car2 =new Car('FerrariF8',15000000,'blue')
const car3 =new Car('rangerover',20000000,'black')

let list = [car1,car2,car3]
// for(let i=0; i<=list.length-1; i++){
//     console.log(list[i].model);
//     console.log(list[i].price);
//     console.log(list[i].color);
// }
for(const car of list){
    car.drive()
}