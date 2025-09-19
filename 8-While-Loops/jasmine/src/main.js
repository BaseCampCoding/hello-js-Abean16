
let juiceName = "Energizer";
let timeToMixJuiceResult;
if (juiceName === "Pure Strawberry Joy") {
    timeToMixJuiceResult = 0.5;
}
else if (juiceName === "Energizer" || juiceName === "Green Garden") {
    timeToMixJuiceResult = 1.5;
}
else if (juiceName === "Tropical Island") {
    timeToMixJuiceResult = 3;
}
else if (juiceName === "All or Nothing") {
    timeToMixJuiceResult = 5;
}
else {timeToMixJuiceResult = 2.5;
}


let wedgesNeeded = 20;
let limes = ["small", "medium", "large"];
let wedgesCut = 0;
let limesCut = 0;
let i = 0;

while (wedgesCut < wedgesNeeded && i < limes.length) {
    if(limes[i] == "small"){
        wedgesCut += 6;
    }
    else if (limes[i] === "medium") {
        wedgesCut += 8;
    }
    else if (limes[i] === "large") {
        wedgesCut += 10;
    }
    limesCut++; 
    i++;
}

let timeLeft = 4;
let orders = ["Pure Strawberry Joy", "Energizer", "Tropical Island", "Green Garden", "All or Nothing"]
let totalTime = 0;
let ordertrack = [];
let index = 0;

for(let i = 0; i < orders.length; i++){
let juice = orders[i];
    
    if (juiceName === "Pure Strawberry Joy"){
        timeToMixJuiceResult = 0.5;
    }
    else if (juiceName === "Energizer" || juiceName === "Green Garden"){
        timeToMixJuiceResult = 1.5;
    }
    if (juiceName === "Tropical Island"){
        timeToMixJuiceResult = 3;
    }
    if (juiceName === "All or Nothing"){
        timeToMixJuiceResult = 5;
    }
    else{
        timeToMixJuiceResult = 2.5;
    }
    orderTrack.push(juice)
    totalTime += timeToMixJuiceResult;
} 

while (totalTime < timeLeft &&  index < orderTrack){

}