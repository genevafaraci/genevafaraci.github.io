function name () {
	var x;
	var person=prompt("What is your name honey?","your name");

	if (person!=null)
	  {
	  x="Hello there " + person + "! My name is Cali, and I am here to help. On the left you will see this lovely little calculator. Use that to do some simple math, and if you need any help I'm right here ;)";
	  document.getElementById("speach").innerHTML=x;
	  }
}

function about(){
	document.getElementById("speach").innerHTML=flirt[4];
}

function help(){
	document.getElementById("speach").innerHTML=flirt[5];
}

var flirt = new Array();

flirt[1] = "That's a small number. But size doesn't matter. Try to calculate a larger number this time."
flirt[2] = "Wow, a double digit number! You really know how to do math."
flirt[3] = "A lady never tells her age, but I am 20. I know I look so young."
flirt[4] = "My name is Cali, but you already know that. I like long walks on the beach. My favorite color is rosy red, just like my lips. And my favorite number is PI. I can recite it! 3.14159... I'll stop you look bored. Anyway, I would love to learn some more about you but we should really do some math.";
flirt[5] = "This is my calculator. You can click on the numbers to choose, and they will display above. Then choose an operator, or a symbol. You can add, subtract, divide and multiply. Sorry no square roots, I'm not that advanced. Then you can choose a second number and then hit = and you'll get your result!"
flirt[6] = "Ooo! Random functions are amazing. This generates a random number between 0 and 20. You have already chosen your first number at random, now choose your operator and then choose a second number, either with the buttons or the random function again."


var num1 = 1000;
var num2 = 1000;
var operation = "A";
var matheq = "";
function mathNum (num) {
	if (operation == "A") {
		num1 = num;
		matheq = num1;
	}
	if (operation != "A") {
		num2= num;
		matheq = num1 + " " + operation + " " + num2;
	}
	document.getElementById("display").innerHTML = matheq;
}

function operate (symbol) {
	if (num1 != 1000) {
		operation = symbol;
		matheq = num1 + " " + operation;
	}
	document.getElementById("display").innerHTML = matheq;
}

function calculate () {
	if (num2 != 1000){
		if (operation == '+') {
			answer = num1 + num2;
		};
		if (operation == '-') {
			answer = num1 - num2;
		};
		if (operation == '*') {
			answer = num1 * num2;
		};
		if (operation == '/') {
			answer = num1 / num2;
		};
	}
	if (answer <= 5) {
		document.getElementById("speach").innerHTML=flirt[1];
	}
	if (answer >= 10){
		document.getElementById("speach").innerHTML=flirt[2];
	}
	if (answer == 20){
		document.getElementById("speach").innerHTML=flirt[3];
	}
	document.getElementById("display").innerHTML = answer;
}

function random () {
	document.getElementById("speach").innerHTML=flirt[6];
	if (operation == "A") {
		num1 = Math.floor((Math.random()*20)+1);
		matheq = num1;
	}
	if (operation != "A") {
		num2= Math.floor((Math.random()*20)+1);
		matheq = num1 + " " + operation + " " + num2;
	}
	document.getElementById("display").innerHTML = matheq;	
}
