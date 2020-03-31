/* 
//this is prompt exercise
var firstName = prompt("what is your first name?");
var lastName = prompt("what is your last name, " + firstName + "?");
var age = prompt("how old are you, " + firstName + " " + lastName + "?");

console.log("your full name is " + firstName + " " + lastName);
console.log("and you are " + age + " years old");
var daysold = age * 365;
alert("you are " + daysold + " days old " + firstName + " " + lastName);


var mysteryNum = 7;
var stringGuess = prompt("guess a number");
//Number(stringGuess) converts the guessing number input by user from string to a number so we can use triple equals
var guess = Number(stringGuess);

if (guess === mysteryNum) {
  alert("You got it!");
} else if (mysteryNum < guess) {
  alert("too high, try again");
} else {
  alert("too low, try again");
}


for (i = -10; i < 20; i++) {
  console.log(i);
}
console.log("PRINT EVEN NUMBERS");
for (i = 10; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

//create a function with an argument in it argument is what goes into a function when defining the function
function square(num) {
  alert(num * num);
}
number = prompt("what number?");
num = Number(number);
square(num);
*/

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
