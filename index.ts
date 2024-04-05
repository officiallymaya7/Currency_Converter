#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.gray("\n\\\t\t\t\t======================================================================"))
console.log(chalk.bold.yellow("\n\\\t\t\t\t************************** CURRENCY CONVERTER **********************"))
console.log(chalk.bold.gray("\n\\\t\t\t\t======================================================================"))
const currency : any = {
    USD : 1, //BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt(
    [
        {
            name: "from",
            message: chalk.bold.blue("\n\t\t\t\tEnter From Currency"),
            type: "list",
            choices: ["USD","EUR","GBP","INR","PKR"]
        },
        {
            name: "to",
            message: chalk.bold.blue("\n\t\t\t\tEnter to Currency"),
            type: "list",
            choices:  ["USD","EUR","GBP","INR","PKR"]
        },
        {
            name: "amount",
            message: chalk.bold.blue("\n\t\t\t\tEnter your amount"),
            type: "number",
            
        }
    ]
)

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount //USD base currency
let convertedAmount = baseAmount * toAmount
console.log(chalk.bold.green("\n\t\t\t\tYour converted amount is " + convertedAmount.toFixed(3)))

console.log(chalk.bold.gray("\n\\\t\t\t\t======================================================================"))

