// -----------------------------VV------------{Empty array that will hold the 12 fibonacci Numbers}
let fibonacciArrays = []
// -----------------------------VV------------{capturing the input from form by adding event listener for the submit from button}
document.getElementById('formFibonacci').addEventListener('submit', (formEvent) => {
    //--------------------VV------------{prevent form submission from refreshing page}
    formEvent.preventDefault();
    //--------------------VV------------{Reset the fibonacciArray each time a user submits an input}
    fibonacciArrays = [];
    //--------------------VV------------{Retrieve the value from the user input}
    const userInput = document.getElementById("inputFibonacci").value;
    console.log(userInput)
    //--------------------VV------------{Ensure that input is treated as a number}
    const inputNumber = userInput * 1
    console.log(inputNumber)
    console.log(checkForFibonacci(inputNumber))
    if (checkForFibonacci(inputNumber)) {
        generateFibonacciNumbers(inputNumber)
    } else {
        console.log(`${inputNumber} is not in the fibonacci sequence`)
    };
});
// -----------------------------VV------------{Function for handling fibonacci generation}
const generateFibonacciNumbers = (inputNumber) => {
    fibonacciArrays.push(inputNumber)
    //-----------------VV--------{Variables for previous number and current number of the sequence}
    let previousNumber;
    let currentNumber = inputNumber;

    //---------------VV---------{Handle case for if user input is 0 or 1.  If 1, we will always assume that it's the first 1 in the sequence (even though it could possibly be the second 1)}
    if (inputNumber === 0 || inputNumber === 1) {
        previousNumber = 0;
    // -------------VV---------{If the fibonacci number given is any other number in the sequence, we iterate through the fibonacci sequence until we reach }
    } else {
        // ------------ first two numbers of the fibonacci sequence
        let startNum = 0;
        let nextNum = 1;
        //------------- while loop to continue to iterate through until the nextnum is greater than the users supplied number
        while(nextNum < inputNumber) {
            const tempNum = nextNum;
            nextNum = startNum + nextNum;
            startNum = tempNum;
        }
        // ----VV-------- once this iteration is done, the 'nextNum' will be our user input number, while our startNum will be the number right before it.
        // set this equal to our previousNumber, and now we have the number that comes before the user supplied number in the fibonacci sequence
        previousNumber = startNum;
    };
    // -----------------VV--------With both of these numbers, we can now find the next 11 numbers in the sequence
    for (let i = 1; i < 12; i++) {
        const nextFib = previousNumber + currentNumber;
        fibonacciArrays.push(nextFib);
        previousNumber = currentNumber;
        currentNumber = nextFib;
    };
    //----------------Return the completed array
    console.log(fibonacciArrays)
    return fibonacciArrays;
};
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