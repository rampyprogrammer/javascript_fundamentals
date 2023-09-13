// // function ram(){
// //     console.log("jai shree ram");

// // }
// // function ram(num1,num2){
// //     console.log(num1+num2);

// // }
// // ram(10,150)
// // Arra
// let fruites=['mango','apple',"drago",'orange']
// console.log(fruites);
// console.log(typeof fruites)
// console.log(fruites[0]);
// fruites[1]="gunde kayi"
// console.log(fruites);
// switch
let prompt=require("prompt-sync")({sigint:true})
dice = prompt('roll the dice :');
switch(parseInt(dice)){
    case 1:
        console.log('you got one');
        break;
    case 2:
        console.log('you got two');
        break;

    case 3:
        console.log('you got three');
        break;
    case 4:
        console.log('you got four');
        break;
    case 5:
        console.log('you got five');
        break;
    case 6:
        console.log('you got six');
        break
    default:
        console.log("you didn't roll the dice");

}

