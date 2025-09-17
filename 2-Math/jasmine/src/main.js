let ratePerHour = 60;
let dayRate = 8 * ratePerHour;

let budget = 1000;
let workdays = Math.floor(budget / dayRate);


let billable = 22;
let monthlyDiscount = 0.2;

fullMonths = Math.floor(35 / billable);
remainingDays = 35 - billable;

let discountedMonthlyRate = dayRate * billable * (1 - monthlyDiscount);
let remainingCost = remainingDays * dayRate;
let totalProjectCost = Math.ceil(discountedMonthlyRate + remainingCost);