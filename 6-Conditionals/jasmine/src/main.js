//task 1
let kind = "car";
let needsLicenseResult =;

if (kind === 'car' || kind === 'true'){
    needsLicenseResult = true
}
else{
    needsLicenseResult = false
}


//task 2
let option1 = "Honda";
let option2 = "Nissian";

let chooseVehicleResult;
if (option1 > option2){
    chooseVehicleResult = option2 + " is clearly the better choice.";
}
else{
    chooseVehicleResult = option1 + " is clearly the better choice.";
}

///task 3
let originalPrice = 10000;
let age = 5;
let calculateResellPriceResult;

if (age < 3){
    calculateResellPriceResult = originalPrice * 0.8;
}
else if(age > 10){
    calculateResellPriceResult = originalPrice * 0.5;
}
else if (age >= 3 && age < 10){
    calculateResellPriceResult = originalPrice * 0.7;
}

