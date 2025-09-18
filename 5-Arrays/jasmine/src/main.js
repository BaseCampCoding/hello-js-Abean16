let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//task 1
let position = 5;
let getItemResult = stack[position];

//task 2
position = 6;
let replacementCard = 17;
stack[position] = replacementCard;

//task 3
let newCardTop = 25;
stack.unshift(newCardTop);

//task 4
position = 8;
stack.splice(position, 1)

//task 5
stack.shift()

//task 6
let newCardBotom = 18;
stack.push(newCardBotom)
//.push() built in method that appends an item at the end of an array

//task 7
stack.pop()
//.pop() built in method removes item at the end of the array(list)

//task 8
let stackSize = 9;
let checkSizeOfStackResult
if (stackSize == stack.length) {
    checkSizeOfStackResult = true;}
else {
    checkSizeOfStackResult = false;
}

/*let checkSizeOfStackResult = stack.length === stackSize*/
