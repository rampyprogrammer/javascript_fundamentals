let temp;
function sub(){
    
    if(fahr=document.getElementById("fahr").checked){
        temp=document.getElementById("temperature").value
        temp=Number(temp)
        // let fahr=document.getElementById("fahr")
        let val1=fahrenit(temp)
        document.getElementById("text").innerHTML = val1;
    }
    else if(document.getElementById("cel").checked){
        temp=document.getElementById("temperature").value
        temp=Number(temp)
        
        let val2=celcius(temp)
        document.getElementById("text").innerHTML = val2;
    }
    else{
        document.getElementById("text").innerHTML="please select the unit"
    }

    

}

function celcius(temp){
    return (temp-32)*(5/9);
}
function fahrenit(temp){
    return temp*(9/5) + 32;
}