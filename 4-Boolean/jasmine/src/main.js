let knightIsAwake = true;
let archerIsAwake = false;
let prisionerIsAwake = true;
let petDosIsPresent = true;


let canExecuteFastAttack = !knightIsAwake;

let canSpy = knightIsAwake || !archerIsAwake || prisionerIsAwake;

let canSignalPrisioner = prisionerIsAwake && archerIsAwake;

let canFreePrisoner = petDosIsPresent && !archerIsAwake || !petDosIsPresent && prisionerIsAwake && !knightIsAwake &&archerIsAwake;