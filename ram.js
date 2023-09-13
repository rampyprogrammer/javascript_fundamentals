let prompt=require("prompt-sync")({sigint:true})
userInput = prompt("Enter a number between 1 and 5:");

switch(userInput) {
  case "1":
    console.log("You entered 1.");
    break;
  case "2":
    console.log("You entered 2.");
    break;
  case "3":
    console.log("You entered 3.");
    break;
  case "4":
    console.log("You entered 4.");
    break;
  case "5":
    console.log("You entered 5.");
    break;
  default:
    console.log("Invalid input.");
}
