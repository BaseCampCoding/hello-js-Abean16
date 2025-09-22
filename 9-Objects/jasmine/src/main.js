//task 1
const scoreBoard = {
    "The Best Ever" : 1000000
};

//task 2
let newPlayerName = "Ayla";
let newPlayerScore = 67;

scoreBoard[newPlayerName] = newPlayerScore;

//task 3
let playerToRemove = "Ayla";
delete scoreBoard[playerToRemove];

//task 4
newPlayerName = "Dani";
newPlayerScore = 67;
let playerNameToUpdate = "Dani";
let scoreToAdd = 1738;
scoreBoard[newPlayerName] = newPlayerScore + scoreToAdd;

//task 5
let mondayBonus = 100;
for (let player in scoreBoard) {
    scoreBoard[player] += mondayBonus;
}

console.log(scoreBoard)