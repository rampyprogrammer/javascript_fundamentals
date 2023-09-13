let ages=[12,18,25,19,21,35]
let adults = ages.filter(checkAge)

adults.forEach(print)

function checkAge(ele){
    return ele>=18;

}
function print(ele){
    console.log(ele);
}