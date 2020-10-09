const readlineSync = require("readline-sync");
const billAmount = readlineSync.questionFloat("How much was the bill?: $");

const totalPartySize = readlineSync.questionInt("How many people in party? ");

const tipPercentage = readlineSync.questionFloat("What % would you like to tip? ");

console.log(`The total amount of your bill is $${billAmount.toFixed(2)}`);
console.log(`The total party size is ${totalPartySize}`);
console.log(`With a tip of ${tipPercentage}%`);

let percentage =tipPercentage / 100;
let totalAmountToTip = billAmount * percentage;
let billWithTip = totalAmountToTip + billAmount;
let totalPerPerson = billWithTip / totalPartySize;

console.log(totalAmountToTip.toFixed(2));
console.log(billWithTip.toFixed(2));
console.log(totalPerPerson.toFixed(2));
