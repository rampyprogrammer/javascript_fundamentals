let x= "pysp@gmail.com"

if(x.indexOf("@")<=0){
    console.log("Invalid Email");
}
else if((x.charAt(x.length-4 )!='.') && (x.charAt(x.length -3)!='.')){
    console.log('Invalid Email');
}
else{
    console.log('valid Email');
}