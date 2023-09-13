// // let prices=[5,10,15,20,25];
// // let pr=""

// // for(let i=0; i<prices.length; i++){
// //     console.log(prices[i]);
// // }

// let fruits=["banana","mango","apple","orange","lemon"]
// console.log(fruits.sort());

//2D array =An array of arrays
let fruites=["lemon","banana","mango"]
let vegitables=['bendekai','carrot','bitrote']
let color =["green","black","blue"]


let all=[fruites,vegitables,color]

all[2][0]="apple"

for(let item of all){
    for(let val of item){
        console.log(val);
    }
    // console.log(item);
}