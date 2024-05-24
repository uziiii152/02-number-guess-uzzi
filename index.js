import inquirer from "inquirer";
const maximumGuesses = 3;
const randomNumber = Math.floor(Math.random() * 10 + 1);
async function guessNumber() {
    let guessesLeft = maximumGuesses;
    let correctGuess = false;
    while (guessesLeft > 0 && !correctGuess) {
        const answers = await inquirer.prompt([{
                type: "number",
                name: "userGuess",
                message: "Guess a number between 1 and 10",
                validate: function (value) {
                    if (isNaN(Number(value))) {
                        return "Please enter a number";
                    }
                    return true;
                }
            }]);
        const { userGuess } = answers;
        console.log(`User guess: ${userGuess},correct Guess: ${randomNumber}`);
        if (userGuess === randomNumber) {
            console.log('correct Guess: ${randomNumber},Congratulations you won!');
            correctGuess = true;
        }
        else {
            guessesLeft--;
            if (guessesLeft > 0) {
                console.log(`Incorrect Guess: ${userGuess}, you have ${guessesLeft} guesses left`);
            }
            else {
                console.log(`Incorrect Guess: ${userGuess}, you have ${guessesLeft} guesses left`);
                console.log(`The correct number was ${randomNumber}`);
            }
        }
    }
}
guessNumber();
