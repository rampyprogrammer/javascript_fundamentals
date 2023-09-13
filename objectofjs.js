/* object : In JavaScript, an object is a fundamental data type
that allows you to store and organize data in key-value pairs.
It is a collection of properties, where each property consists 
of a key (also known as a property name) and its associated value.*/



// let car = {
//     'name':'ferrari',
//     'type':'fuel',
//     'seatcapacity': 5,
//     'color':'red'
// }

// car['speed'] = 40
// console.log(car);

let caluculator = {
    add : function(a,b){
        return a+b
    },
    multi : function (x,y){
        return x*y
    }
}

console.log(caluculator.add(12,10));
console.log(caluculator.multi(12,10));


const car = {
    name :'bugati',
    fuel : 'petrole',
    seat : 4,
    run : function(speed){
        console.log(`car is going in ${speed}Km/hr `);
    
    },
    brake : function(msg){
        console.log(`finally car is ${msg}`);

    }


}
console.log(car.name);
console.log(car.fuel);
console.log(car.seat);
car.color = 'blue'
console.log(car);
car.run(100)
car.brake('stopped')
