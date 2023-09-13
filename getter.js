/* getter and setter :In JavaScript, setters and 
getters are special methods that allow you to 
define the behavior for assigning and retrieving 
values to and from object properties. They provide a 
way to control the access and manipulation of object 
properties and add an additional layer of abstraction.

Setters and getters are defined using the set and get
 keywords, respectively, followed by the property name.
The methods are associated with a specific property 
of an object and are invoked automatically when the 
property is assigned a value or accessed for reading. */
class car{
    constructor(power){
        this._gas = 40;
        this._power = power;
    }
    get power(){
        return `${this._power}ph`;
    }
    get gas(){
        return `${this._gas}ltr`;
    }
    set power(value){
        if (value <=0){
            throw new Error("power must be greater than 0")
        }
        else{
            this._power = value;
        }
       
    }
    set gas(value){
        this._gas = value;
    }

}

let obj = new car(500)
console.log(obj.gas);
console.log(obj.power);
console.log("modifying the values..");
obj.gas = 50
obj.power = 87
console.log(obj.gas);
console.log(obj.power);



// console.log(obj.pow1());