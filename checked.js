
function sub(){
    const check1=document.getElementById("mycheck")
    const check2=document.getElementById("mycheck1")
    const check3=document.getElementById("mycheck2")
    let message=document.getElementById("text")

    if(check1.checked){
        message.innerHTML='your paying bill through Paypal'
    }
    else if(check2.checked){
        message.innerHTML='your paying bill through Phonepay'
    }
    else if(check3.checked){
        message.innerHTML='your paying through GooglePay'
    }
    else{
    message.innerHTML='please pay the bill...!'
    }
}