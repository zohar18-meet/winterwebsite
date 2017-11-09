var add = "+";
var sub = "-";
var mult = "*";
var div = "/" ; 

var num1 = prompt("enter the first number");
var num2 = prompt("enter the second number");
var math = prompt ("what math operation would you like to use?", "+,-,*,/");

if (math==add){
	result = Number(num1) + Number(num2);
}

if (math==sub){
	result = Number(num1) - Number(num2);
}

if (math==mult){
	result = Number(num1) * Number(num2);
}

if (math==div){
	result = Number(num1) / Number(num2);
}


alert("the result is " + result);