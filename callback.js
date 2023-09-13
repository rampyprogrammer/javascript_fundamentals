//callBack : a function passed as an argument 
//            to anether function
/*
sum(2,3,Ram)

function sum(a,b,back){
    let result= a+b;
    back(result);
}
function Ram(result){
    console.log(result);
}*/
let colors=["red","black","green"]
colors.forEach(demo);
colors.forEach(print)

function demo(element,index,array){
    array[index]=element[0].toUpperCase() + element.substring(1)
}
// console.log(colors);
function print(element){
    console.log(element);
}
