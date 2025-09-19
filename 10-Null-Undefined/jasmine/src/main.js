//task 1
let visitorName = "Dani";
let visitorAge = 17;
let visitorTicketId = 1738;

const visitor = { 
    name : visitorName,
    age : visitorAge,
    ticketId : visitorTicketId
}

//task 2
visitor.ticketId = null

//task 3
const tickets = {
    1738: "Dani",
    1739: null,
    1740: null,
}

let ticketIdToCheck = 1739;
let ticketStatusResult;

if (!(ticketIdToCheck in tickets)){
    ticketStatusResult = "unknown ticket id"
}
else if (tickets[ticketIdToCheck] === null) {
    ticketStatusResult = "not sold"
}
else{
    ticketStatusResult = `sold to ${tickets[ticketIdToCheck]}`
}

//task 4
let simpleTicketStatusResult;
if (!(tickets[ticketIdToCheck] === null)) {
    simpleTicketStatusResult = `${tickets[ticketIdToCheck]}`
}
else {
    simpleTicketStatusResult = "invalid ticket !!!"
}

//task 5
const visitorWithGtc = {
    gtc: {
        version: 1.0
    }
}

let gtcVersion;

if (visitorWithGtc.gtc && visitorWithGtc.gtc.version) {
    gtcVersion = visitorWithGtc.gtc.version;
}
else {
    gtcVersion = null;
}