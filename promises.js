let is_shop_open = false


let order=(time,work)=>{
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }
        else{
            reject(console.log("our shop is closed"))
        }
    })
}
order(2000,()=>console.log("the order is placed"))
.then(()=>{
    return order(100,()=>{
        console.log('start the production');
    })

})
.then(()=>{
    return order(2000,()=>{
        console.log('we are doing that dish what actually they have ordered');

    })
    
})

.then(()=>{
    return order(3000,()=>{
        console.log('the ordered dish is ready here');
    })
    
})

.then(()=>{
    return order(2000,()=>{
        console.log('yess, finally we served the dish....!');
    })
    
})

.catch(()=>{
    console.log('customer left');
})

.finally(()=>{
    console.log("the day ended here");
})