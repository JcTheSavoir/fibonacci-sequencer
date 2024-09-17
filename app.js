// -----------------------------VV------------{capturing the input from form by adding event listener for the submit from button}
document.getElementById('formFibonacci').addEventListener('submit', (formEvent) => {
    //--------------------VV------------{prevent form submission from refreshing page}
    formEvent.preventDefault();
    //--------------------VV------------{Retrieve the value from the user input}
    const userInput = document.getElementById("inputFibonacci").ariaValueMax;
    console.log(userInput)
    //--------------------VV------------{Ensure that input is treated as a number}
    const inputNumber = userInput * 1
    console.log(inputNumber)
    

})
// -----------------------------VV------------{Function for handling fibonacci generation}

// -----------------------------VV------------{Function for checking if user supplied number falls into the fibonacci sequence}
