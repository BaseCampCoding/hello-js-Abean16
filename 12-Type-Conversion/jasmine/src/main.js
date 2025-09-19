//task 1
let digits1 = [1, 7, 3];
let digits2 = [3, 7, 1];

let number1 = digits1.join("");
let number2 = digits2.join("");

let twoSum = Number(number1) + Number(number2);

//task 2
let luckyInput = 12321;
let luckyInputStr = luckyInput.toString().split('').reverse().join('');
let LuckyNumber;
if (parseFloat(luckyInputStr) === luckyInput) {
    LuckyNumber = true;
}
else {
    LuckyNumber = false;
}

//task 3
let userInput = "12321";
let errorMessage;

if (userInput === null || userInput.length === 0) {
    errorMessage = "Required field";
}
else if (userInput === '0') {
    errorMessage = "Must be a number besides 0";
}
else {
    errorMessage = " ";
}

console.log(errorMessage)