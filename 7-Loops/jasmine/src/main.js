let birdsPerDay = [5, 2, 6, 7, 9, 10, 20];
let total = 0;

//task 1
for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];
    console.log(total)
}

//task 2
let week = 1;
let daysPerWeek = 7;
let weekStart = (week -1) * daysPerWeek;
let weekEnd = week * daysPerWeek;
let weekTotal = 0;


//task 3
for (let i = weekStart; i < weekEnd && i < birdsPerDay.length; i++) {
    weekTotal += birdsPerDay[i];
}

for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
}

console.log(birdsPerDay)