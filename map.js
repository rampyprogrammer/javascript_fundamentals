let stocks = {
    Fruits :["strwberry","grapes","banaan","apple"],
    liquid :["water","ice"],
    holder :["cone","cup","stick"],
    topping :["chocklate","peanuts"]
}
let is_shop_open = true;

function time(m){
    return new Promise( (resolve,reject)=>{
        if (is_shop_open){
            setTimeout(resolve,m)
        }
        else{
            reject("sorry sir we dont have that item",error)
        }
        
    } )
}
async function kitch(){
    try{
        await time(2000)
        console.log("our shop is open")
        
        await time(100)
        console.log(`the order is placed thaat is ${stocks.Fruits[0]}`)

        await time(2000)
        console.log("start the production")

        await time(1000)
        console.log("and the oordered item is completeted")

        await time(3000)
        console.log("we served the order")


    }
    catch(error){
        console.log("customer left");
    }
    finally{
        console.log('finally the code excutes..');
    }
}
kitch()

let date =new Date();
datet(date)
function datet(date){
    let hh = date.get
}