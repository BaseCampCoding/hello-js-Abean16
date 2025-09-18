
let juiceName = "orange";
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

while (wedgesCut < wedgesNeeded && i < limes.length) {
    let lime = limes[i];

    if (lime === "small") {
        wedgesCut += 6;
    }
    else if (lime === "medium") {
        wedgesCut += 8;
    }
    else if (lime === "large") {
        wedgesCut += 10;
    }
    i++;
}

let timeLeft = 20;
let orders = ["orange", "apple", "grape"]
for (juice in orders) {

}
console.log("anything")