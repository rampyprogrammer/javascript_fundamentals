
//ANONYMOUS FUNCTION : IT IS USED TO DEFINE FUNCTION WITHOUT A NAME
//                     OR WE CAN CALL IT AS FUCTION HAVING NO NAME 
let count=1;
document.getElementById('increese').onclick = function(){
    count+=1
    document.getElementById('text').innerHTML = count;

}
document.getElementById('decreese').onclick = function(){
    count-=1
    document.getElementById('text').innerHTML = count;

}

//NOT ANONY MOUS
// function add(){
//     count+=1
//     document.getElementById('text').innerHTML = count;

// }
// function reduce(){
//     count-=1
//     document.getElementById('text').innerHTML = count;
    
// }