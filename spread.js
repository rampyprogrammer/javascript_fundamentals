//spread operator =allows an iterable such as
//                an array or string to be exapnded
//                in place where zero or more 
//                orguments are expected
//                (unpacks the elements)
/*
  let num =[1,2,3,4,5,6,7,8]
let name = "veerabasappa"
console.log(...name);
console.log(Math.max(...num));//output : 8
//this spread operator used to unpacks the elements from array and string and that is used some purpose
*/
/*
let class1=["hero","raider","bullet"]
let class2 = ["pulser","duke","apachi"]

class1.push(...class2)
console.log(class1);
*/
let a=10;
let b=20;
let c=30;
let d=40;
let e=50;

console.log(number(a,b,c,d,c));

function number(...numbers){
    let add=0;
    for(let num of numbers){
        add+=num;

    }
    return add
}