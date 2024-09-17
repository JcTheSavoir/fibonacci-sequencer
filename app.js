// -----------------------------VV------------{capturing the input from form by adding event listener for the submit from button}
document.getElementById('formFibonacci').addEventListener('submit', (formEvent) => {
    //--------------------VV------------{prevent form submission from refreshing page}
    formEvent.preventDefault();
    //--------------------VV------------{Retrieve the value from the user input}
    const userInput = document.getElementById("inputFibonacci").value;
    console.log(userInput)
    //--------------------VV------------{Ensure that input is treated as a number}
    const inputNumber = userInput * 1
    console.log(inputNumber)
    console.log(checkForFibonacci(inputNumber))
    if (checkForFibonacci(inputNumber)) {
        console.log(`${inputNumber} is in the fibonacci sequence`)
    } else {
        console.log(`${inputNumber} is not in the fibonacci sequence`)
    };

});
// -----------------------------VV------------{Function for handling fibonacci generation}

// -----------------------------VV------------{Function for checking if user supplied number falls into the fibonacci sequence}
const checkForFibonacci = (inputNumber) => {
    // ------------ Check if number is less than zero
    if (inputNumber < 0) {
        return false;
    // ------------ Check if compareConditions return true
    } else if (compareConditions(inputNumber)){
        return true;
    // ----------- Only option left should be if compareConditions returns false
    } else {
        return false;
    };
};
// -----------------------------VV------------{Function to compare user supplied number against fibonacci test conditions}
const compareConditions = (x) => {
    //-------------------VV-----------{Put number through two equations}
    let testCondition1 = 5 * x ** 2 + 4;
    let testCondition2 = 5 * x ** 2 - 4;
    //-------------------VV----------{Check if at least one of the results is a perfect square}
    return checkForPerfectSquare(testCondition1) || checkForPerfectSquare(testCondition2);
};
//----------------------------VV--------------{Function to test if a number is a perfect square}
const checkForPerfectSquare = (num) => {
    if (num < 0) {
        return false;
    }
    // ------------------VV-----------{Gets the square root of the number}
    const square = Math.sqrt(num);
    // ------------------VV-----------{Checks if number is an integer, returns true if it is, returns false if it's not}
    return Number.isInteger(square);
};