let button = document.getElementById("button")
button.addEventListener('click',bigin)
let myDiv = document.getElementById("mydiv")

function bigin(){
    let degrees = 0;
    let x = 0;
    let y = 0;
    timerId = setInterval(()=>{
        if(degrees>360){
            clearInterval(timerId)
        }else{
           degrees+=3
            myDiv.style.transform ="rotateZ("+degrees+"deg)"
            x+=1
            y+=1
            myDiv.style.top =x + "px"
            myDiv.style.left =y + "px"
           

        }
    },1)
}