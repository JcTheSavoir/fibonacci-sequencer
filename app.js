// -----------------------------VV------------{Empty array that will hold the 12 fibonacci Numbers}
let fibonacciArrays = [];
// -----------------------------VV------------{capturing the input from form by adding event listener for the submit from button}
document.getElementById('formFibonacci').addEventListener('submit', (formEvent) => {
    //--------------------VV------------{prevent form submission from refreshing page}
    formEvent.preventDefault();
    //--------------------VV------------{Reset the fibonacciArray each time a user submits an input}
    fibonacciArrays = [];
    // --------VV-----{find the element that the results should be added to}
    const outputElement = document.getElementById('outputFibonacci');
    //--------------------VV------------{Retrieve the value from the user input}
    const userInput = document.getElementById("inputFibonacci").value;
    //--------------------VV------------{Ensure that input is treated as a number}
    const inputNumber = userInput * 1;
    //--------------------VV------------{if number is > 1000000000000000, it will be converted to a bigint and tested differently}
    if (inputNumber > 1000000000000000) {
        try {
        /*I'm using input number in the if statement in case of a string being presented.  The reason we can't use that same input 
        for the BigInt conversion is due to javascript limits with bigger numbers.  Even multiplying by 1 can give a different number.
        For example: if user inputs "14472334024676221", the inputNumber becomes "14472334024676220" */ 
            const bigUserInput = BigInt(userInput);
            genCheckFibonacci(bigUserInput, outputElement);
        // -----------------VV-------------For now, this is used for decimals being entered or any other errors.
        } catch (error) {
            outputElement.textContent = 'Error!';
            console.log(error);
        };
    } else {
        if (checkForFibonacci(inputNumber)) {
            generateSmallFibonacci(inputNumber);
            // --------VV-----{add the correct output into the div element with specified ID}
            outputElement.textContent = fibonacciArrays.join(', ');
        } else {
            outputElement.textContent = 'Error!';
        };
    };
});
// -----------------------------VV------------{Function for handling small fibonacci generation}
const generateSmallFibonacci = (inputNumber) => {
    fibonacciArrays.push(inputNumber);
    //-----------------VV--------{Variables for previous number and current number of the sequence}
    let previousNumber;
    let currentNumber = inputNumber;

    //---------------VV---------{Handle case for if user input is 0}
    if (inputNumber === 0) {
        previousNumber = 0;
        currentNumber = 1;
        fibonacciArrays.push(currentNumber);
    //--------------VV----------{handle case for if user input is 1.  If 1, we will always assume that it's the first 1 in the sequence (even though it could possibly be the second 1)} 
    } else if(inputNumber === 1){
        previousNumber = 0;
    // -------------VV---------{If the fibonacci number given is any other number in the sequence, we iterate through the fibonacci sequence until we reach }
    } else {
        // ------------ first two numbers of the fibonacci sequence
        let startNum = 0;
        let nextNum = 1;
        //------------- while loop to continue to iterate through until the nextNum is greater than the users supplied number
        while(nextNum < inputNumber) {
            const tempNum = nextNum;
            nextNum = startNum + nextNum;
            startNum = tempNum;
        };
        // ----VV-------- once this iteration is done, the 'nextNum' will be our user input number, while our startNum will be the number right before it.
        // set this equal to our previousNumber, and now we have the number that comes before the user supplied number in the fibonacci sequence
        previousNumber = startNum;
    };
    // -----------------VV--------With both of these numbers, we can now find the next 11 numbers in the sequence
    for (let i = fibonacciArrays.length; i < 12; i++) {
        const nextFib = previousNumber + currentNumber;
        fibonacciArrays.push(nextFib);
        previousNumber = currentNumber;
        currentNumber = nextFib;
    };
    //----------------Return the completed array
    return fibonacciArrays;
};
// ------------------VV----------------{Function for generating  and checking big fibonacci numbers}
const genCheckFibonacci = (bigUserInput, outputElement) => {
    // starting with the 72 and 73 fibonacci numbers, as that's the limit of the small number function
    let startNum = BigInt(498454011879264);
    let nextNum = BigInt(806515533049393);
    let numberLoops = 0;
    while(nextNum < bigUserInput) {
        const tempNum = nextNum;
        nextNum = startNum + nextNum;
        startNum = tempNum;
        numberLoops += 1;
    };
    // ----------------VV---------Good to know how many loops were needed to find the fib number
    console.log(`Number of loops: ${numberLoops}`);
    // ----------------VV---------This could be used to tell the user the two closest fibonacci numbers to there input (if there's was not a fib) 
    console.log(startNum, nextNum);
    // Once the while loop generates a fib that is !< the user number, we check if that number is the users input.  If it is, then user number is a fib 
    if (bigUserInput === nextNum) {
        fibonacciArrays.push(bigUserInput);
        for (let i = fibonacciArrays.length; i < 12; i++) {
            const nextFib = startNum + nextNum;
            fibonacciArrays.push(nextFib);
            startNum = nextNum;
            nextNum = nextFib;
        };
        outputElement.textContent = fibonacciArrays.join(', ');
    // Otherwise, it's not a fib
    } else {
        outputElement.textContent = 'Error!';
    };
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
    };
    // ------------------VV-----------{Gets the square root of the number}
    const square = Math.sqrt(num);
    // ------------------VV-----------{Checks if number is an integer, returns true if it is, returns false if it's not}
    return Number.isInteger(square);
};