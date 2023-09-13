// Map : map is an object that holds the key-value pair of any data type
const store = new Map([
    ['shirt',30],
    ['pant', 67],
    ['socks',45],
    ['underwear',234]
]);

// console.log(store.get('shirt'));
// console.log(store.get('pant'));
// store.set("hat",70)
// store.delete("socks")
// console.log(store.has("hat"));
// console.log(store.has("underwear"));
console.log(store.size);
store.forEach((val,key)=> console.log(`${key} $${val}`))