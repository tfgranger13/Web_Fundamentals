function fizzBuzz() {
    // for loop to run through the numbers 1 to 100
    for (var i = 1; i <= 100; i++){
        // check if a FizzBuzz
        if (i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }
        // check if just a fizz
        else if (i%3==0 && i%5!=0){
            console.log("Fizz");
        }
        // check if just a buzz
        else if (i%3!=0 && i%5==0){
            console.log("Buzz");
        }
        // print # if not a fizz or buzz
        else console.log(i);
    }
}

fizzBuzz();