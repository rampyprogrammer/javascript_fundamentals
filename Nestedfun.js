
//Nsted function in javascript
let userName = "virat kohli"
let userInbox = 1000020;
login();
function login(){
    display_userName()
    display_userInbox()

    function display_userName(){
        console.log(`welcom ${userName}`);
    }

    function display_userInbox(){
        console.log(`hey you have ${userInbox} New Messages`);
    }
}