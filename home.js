function generateRandomNum() {
    return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;
let curr_attempts = 0;
let randomNumber = generateRandomNum();
//console.log(randomNumber) // for testing purposes


function handleGuess() {

    const guessed_num = Number(document.getElementById('guessInput').value);

    const resultDisplay = document.getElementById('resultDisplay');


    if (guessed_num === randomNumber) {
        resultDisplay.textContent = "🎉 Correct! You guessed the number!";
        resultDisplay.style.color = "green";
        disableInput();
    } else {
        curr_attempts++;
        if (curr_attempts < MAX_ATTEMPTS) {
            resultDisplay.textContent = `❌ Wrong! Try Again. Attempts left: ${MAX_ATTEMPTS - curr_attempts}`;
            resultDisplay.style.color = "orange";
        } else {
            resultDisplay.textContent = `💔 You Lost! The correct number was ${randomNumber}.`;
            resultDisplay.style.color = "red";
            disableInput();
        }
    }
}

function disableInput() {
    document.getElementById('guessInput').disabled = true;
    document.getElementById('guessButton').disabled = true;
}

document.getElementById('guessButton').addEventListener('click', handleGuess);
