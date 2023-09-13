let timer1 = setTimeout(fisrtMessage,5000)
let timer2 = setTimeout(secondMessage,7000)
let timer3 = setTimeout(thirdMessage,13000)



function fisrtMessage(){
    console.log('hey i am rama i can play cricket very well');

}
function secondMessage(){
    console.log('hey i am virat..! i can run so fast and i am very fit');

}
function thirdMessage(){
    console.log('hey i am msdhoni i can stump so faster');
}
clearTimeout(timer3);
clearTimeout(timer1);
clearTimeout(timer2);

/*The clearTimeout function is used to cancel a timeout 
that has been previously scheduled with the setTimeout 
function.

When you use setTimeout in JavaScript, you can specify a 
delay in milliseconds after which a function will be 
executed. The setTimeout function returns a unique identifier, 
known as the timeout ID. You can store this ID in a variable and 
later pass it to clearTimeout to cancel the execution of the function.*/

// Here's an example to illustrate how clearTimeout works:


function myFunction() {
  console.log("Timeout executed");
}

var timeoutID = setTimeout(myFunction, 3000); // Schedule myFunction to execute after 3 seconds

// Later, if you want to cancel the execution
clearTimeout(timeoutID);
/* In the example above, the setTimeout function schedules the execution of myFunction after a delay of 3 seconds. 
The returned timeout ID is stored in the timeoutID variable. If you want to cancel the execution of myFunction before
 it happens, you can use clearTimeout with the timeoutID as an argument. This will prevent myFunction from being executed.*/