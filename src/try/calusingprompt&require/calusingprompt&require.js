const prompt = require("prompt-sync") ({sigint:true});
var num1 = prompt("Enter the number 1 : ");
var num2 = prompt("Enter the number 2 : ");
var a = parseInt(num1);
var b = parseInt(num2);
var fun = prompt("Enter the operator that you want : ");

if(fun == '+'){
    var addResult = a+b;
    console.log(addResult);
}

else if(fun == '-'){
    var sumResult = a-b;
    console.log(sumResult);
}

else if(fun == '*'){
    var mulResult = a*b;
    console.log(mulResult);
}

else if(fun == '/'){
    var divResult = a/b;
    console.log(divResult);
}

else{
    console.log("Invalied Function");
}