// Guessing Game
function guessingGame() {
    let answer = Math.floor(Math.random() * 100);
    let guesses = 0;
    let gameOver = false;

    return function(guess) {
        if(gameOver) {
            return 'The game is over, you already won!';
        }
        guesses++;
        if(guess === answer) {
            gameOver = true;
            return `You win! You found ${answer} in ${guesses} guesses.`;
        } else if(guess > answer) {
            return `${guess} is too high!`;
        } else {
            return `${guess} is too low!`;
        }
    };
}

// Bank Account
function createAccount(pin, initialAmount) {
    let balance = initialAmount;

    return {
        checkBalance: function(inputPin) {
            if(inputPin !== pin) {
                return 'Invalid PIN.';
            }
            return `Current balance: $${balance}.`;
        },
        deposit: function(inputPin, amount) {
            if(inputPin !== pin) {
                return 'Invalid PIN.';
            }
            balance += amount;
            return `Successfully deposited $${amount}. Current balance: $${balance}.`;
        },
        withdraw: function(inputPin, amount) {
            if(inputPin !== pin) {
                return 'Invalid PIN.';
            }
            if(amount > balance) {
                return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
            }
            balance -= amount;
            return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
        },
        changePin: function(oldPin, newPin) {
            if(oldPin !== pin) {
                return 'Invalid PIN.';
            }
            pin = newPin;
            return 'PIN successfully changed!';
        }
    };
}

// Curried Add
function curriedAdd(total = 0) {
    return function(num) {
        if(num === undefined) {
            return total;
        }
        total += num;
        return curriedAdd(total);
    };
}
