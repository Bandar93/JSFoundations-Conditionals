const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.


const operator = prompt('Enter operator: ');
const number1 = parseFloat (prompt('Enter First Number: '));
const number2 =parseFloat (prompt('Enter Second Number: '));

let result;

if (operator === '+'){
    result = number1 + number2;
}
else if(operator === '-'){
    result = number1 - number2;
}
else if (operator === '*'){
    result = number1 * number2;

}
else {
    result = number1 / number2;
}

console.log(`The result is ${result}`);