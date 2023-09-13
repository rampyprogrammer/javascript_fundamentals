let array = [1,2,3,44,5,6]
// let val = array.reduce(function (total,ele,index,arr){
//     console.log(total,ele,index,arr);

// })

let val = array.reduce(add)

function add(total,ele){
    return total+ele

}
console.log(val);



