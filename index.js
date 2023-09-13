// document.getElementById("count-el").innerText=5 

//intialize the count 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the html
//camelcase
let countEl=document.getElementById("count-el")
console.log(countEl);
let data =document.getElementById("text")

let count=0
function increment(){
    count +=1
    countEl.innerText=count


}
function decrement(){
    count-=1
    document.getElementById("count-el").innerHTML= count;
}
//create function to save the data
function save(){
    let countstr=count+" - "
    data.innerHTML += countstr
}


