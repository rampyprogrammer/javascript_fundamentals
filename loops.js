// let prompt=require("prompt-sync")({sigint:true})
// n=prompt("enter the value of n :")
// let num =" "
// for (let i=1;i<=n;i++){
//     if(i%2==0){
//         num += i + " "
//     }
// }
// console.log(num)


 students={
    manohar : 99,
    Akash : 99.1,
    pavan : 100,
    abi : 99
    

}
for (let j in students){
    console.log("marks of " + j + " is "+ students[j])
}