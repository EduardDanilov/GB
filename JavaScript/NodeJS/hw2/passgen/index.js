function getRandomPass() {
    // Important! The first parameter means the number of characters in the password.
    // The second, third and fourth parameters define what the password will consist of.
    // They should be defined as: numbers, letters, symbols
    // for example: getRandomPass(5, 'letters', 'numbers') - the password will be 5 characters long and includes only letters and numbers
    const receivedArguments = arguments;
    const allSymbols = {
        //all characters that are used to generate the password
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        letters: "aeiouybcdfghjklmnpqrstvwxzAEIOUYBCDFGHJKLMNPQRSTVWXZ",
        symbols: "!#$%&()*+,-./:;<=>?@[]^_`{|}~",
    };

    const passSymbols = []; //arrays of elements that will be directly used for password generation

    for (let i = 1; i < receivedArguments.length; i++) {
        //check arguments
        if (
            receivedArguments[i] === "numbers" ||
            receivedArguments[i] === "letters" ||
            receivedArguments[i] === "symbols"
        ) {
            switch (receivedArguments[i]) {
                case "numbers":
                    passSymbols.push(allSymbols.numbers);
                    break;
                case "letters":
                    passSymbols.push(allSymbols.letters);
                    break;
                case "symbols":
                    passSymbols.push(allSymbols.symbols);
                    break;
                default:
                    break;
            }
        } else 
            console.log(
                "ERROR! Invalid arguments naming!\nMust be: 'letters', 'numbers', 'symbols'"
            );
    }

    const randomPass = []; // generated password that will be return

    if (passSymbols) {
        for (let i = 0; i < receivedArguments[0]; i++) {
            const randomPassArray = passSymbols[Math.floor(Math.random() * passSymbols.length)]; // choice array for generator
            const randomPassSymbol = randomPassArray[Math.floor(Math.random() * randomPassArray.length)]; // choice symbol from array
            randomPass.push(randomPassSymbol);
        }
    }

    return randomPass.join("");
}

module.exports = { getRandomPass };