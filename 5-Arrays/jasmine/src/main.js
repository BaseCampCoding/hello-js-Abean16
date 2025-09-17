let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let position = 2;
let getItemResult = stack[2];

let replacementCard = 6;
stack[7] = replacementCard;

let newCardTop = 15;
stack.unshift(15);

stack.splice(3,1);

stack.splice(0);

let newCardBotom = 18;
stack.push(newCardBotom)

stack.pop();

let stackSize = 20;
let checkSizeOfStackResult = stackSize == stack.length;
console.log(checkSizeOfStackResult);