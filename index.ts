#!/usr/bin/env node

import inquirer from "inquirer";

async function main() {
    const answer =await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: "Please guess a number between 1-6: ",
        },
    ]);

    const randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log("Computer's number:", randomNumber);

    if (answer.userGuessedNumber === randomNumber) {
        console.log("Congratulations! You guessed the right number.");
    } else {
        console.log("Sorry, you guessed the wrong number.");
    }
}

main().catch(error => {
    console.error(error);
})
