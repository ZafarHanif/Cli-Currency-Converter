#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Print welcome message
console.log(chalk.rgb(255, 192, 0)("\n\t Welcome to CodeWithZefi - Currency Converter Project\n\t"));
// Interbank Currency Rates
const currency = {
    USD: 1, //United States Dollar (Base currency)
    EUR: 0.93, //States of the European Union Euro
    GBP: 0.8, //United Kingdom Pound Sterling
    SAR: 3.75, //Saudi Arabia Riyal
    AED: 3.67, //United Arab Emirates Dirham
    PKR: 278.38, //Pakistani Rupee
    INR: 83.39, //Indian Rupee
    AUD: 1.53, //Australian Dollar
    CAD: 1.36, //Canadian Dollar
    CNY: 7.24, //Chinese Yuan
    KWD: 0.3, //Kuwaiti Dinar
    BHD: 0.37, //Bahraini Dinar
    OMR: 0.38, //Omani Rial
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Choose the currency to convert from:",
        type: "list",
        choices: [
            "USD",
            "EUR",
            "GBP",
            "SAR",
            "AED",
            "PKR",
            "INR",
            "AUD",
            "CAD",
            "CNY",
            "KWD",
            "BHD",
            "OMR",
        ],
    },
    {
        name: "to",
        message: "Choose the currency to convert to:",
        type: "list",
        choices: [
            "USD",
            "EUR",
            "GBP",
            "SAR",
            "AED",
            "PKR",
            "INR",
            "AUD",
            "CAD",
            "CNY",
            "KWD",
            "BHD",
            "OMR",
        ],
    },
    {
        name: "amount",
        message: chalk.rgb(255, 255, 0)("Enter the amount to convert:"),
        type: "number",
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let Amount = user_answer.amount;
let baseAmount = Amount / fromAmount; // USD base currency
let convertedAmount = baseAmount * toAmount;
// console.log(fromAmount);
// console.log(toAmount);
// console.log(Amount);
if (user_answer.from === user_answer.to) {
    console.log(chalk.rgb(192, 0, 0)("You selected the same currency for conversion. No conversion needed."));
}
else {
    console.log(chalk.rgb(0, 176, 240)(`Converted Amount: ${convertedAmount.toFixed(2)}`));
    console.log(chalk.rgb(112, 173, 71)(`${Amount} ${user_answer.from} equals ${convertedAmount.toFixed(2)} ${user_answer.to}`));
}
