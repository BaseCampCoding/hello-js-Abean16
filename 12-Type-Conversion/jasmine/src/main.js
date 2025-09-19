//task 1
let digits1 = [1, 7, 3];
let digits2 = [3, 7, 1];

let number1 = digits1.join("");
let number2 = digits2.join("");

let twoSum = Number(number1) + Number(number2);

//task 2
let luckyInput = 123214;
let luckyInputStr = "anna";
let LuckyNumber;
if (parseFloat(luckyInput.toString().split('').reverse().join('')) === luckyInput) {
    LuckyNumber = true;
}
else {
    LuckyNumber = false;
}

console.log(LuckyNumber)