



let names = ["veeara","sushila","prakasha","nagaveni","jyoti"]
names.forEach(capitalize)
names.forEach(print)


function capitalize(a,b,c){
    c[b]=a[0].toUpperCase() + a.substring(1)
}
// console.log(names[0]);
function print(element){
    console.log(element);
}