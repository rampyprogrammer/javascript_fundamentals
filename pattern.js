const answer= (Math.random()*4+1)
let guesses = 0;

function sub(){
    let guess=document.getElementById('gessfiel').value
    guesses+=1

    if(guess==answer){
        alert(answer," is the #. It took you ",guesses," guess")

    }
    else if(guess>answer){
        alert('too big!!')
    }
    else{
        alert('too small!')
    }
}