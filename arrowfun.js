//Arrow function('=>') : COMPACT ALTERNATIVE TO  A TRADITIONAL FUNCTION 


//traditional functions
// const greeting = function(userName){
//     console.log(`hello ${userName}`);
// }
// greeting("virat");

// ARROW FUNCTION 

const greeting = (userName) => console.log(`helllo ${userName}`);
greeting('bosidk')

//AND ONETHERE EXAMPLE
//traditional function
// let ages = [12,18,89,32,21,23]
// let adults = ages.filter(checkage)
// function checkage(ele){
//     return ele>=18;
// }
// console.log(adults);
let ages = [12,18,89,32,21,23]
let adults = ages.filter((ele)=>ele>=18);
console.log(adults);