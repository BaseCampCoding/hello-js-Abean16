const { startTransition } = require("react");

let knightIsAwake = true;
let archerIsAwake = false;
let prisionerIsAwake = true;
let petDosIsPresent = true;


let canExecuteFastAttack = !knightIsAwake;
console.log( "Can execute fast attack: " + canExecuteFastAttack)
//false
if (knightIsAwake == false){
    canExecuteFastAttack = true
}
else{
    canExecuteFastAttack = false
}

let canSpy = knightIsAwake || archerIsAwake || prisionerIsAwake;
console.log( "Can spy: " + canSpy)
//true

let canSignalPrisioner = prisionerIsAwake && !archerIsAwake;
console.log( "Can signal prisioner: " + canSignalPrisioner)
//true 

let canFreePrisoner = (petDosIsPresent && !archerIsAwake) ||
(!petDosIsPresent && prisionerIsAwake && !knightIsAwake && archerIsAwake);
console.log("Can free prisoner: " + canFreePrisoner)
//true

