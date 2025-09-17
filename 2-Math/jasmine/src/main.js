let ratePerHour = 60;
let dayRate = 8 * ratePerHour;

let budget = 1000;
let workdays = Math.floor(budget / dayRate);


let billable = 22;
let monthlyDiscount = (billable * dayRate) * 0.2

let fullMonths = Math.floor(35 / billable);
let remainingDays = 35 % billable;

let discountedMonthlyRate = dayRate * billable - monthlyDiscount;
let remainingCost = remainingDays * dayRate;
let totalProjectCost = discountedMonthlyRate + remainingCost