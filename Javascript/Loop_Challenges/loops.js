// Print odds 1 thru 20
function printOdds () {
    // for loop to count from 1 to 20 by 2's to get just the odds
    for (i = 1; i<20; i += 2){
        console.log(i);
    }
}
printOdds();

// Decreasing multiples of 3
function multiplesOfThree() {
    // for loop to count down from 99 by 3's
    for (i=99; i>=0; i -= 3) {
        console.log(i);
    }
}
multiplesOfThree();

// Print the sequence
function printSequence() {
    // set up the array for the sequence
    var arr = [4, 2.5, 1, -0.5, -2, -3.5];
    // for loop to print each value
    for (i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}
printSequence();

// Sigma
function sigma() {
    // add the values 1 thru 100, set up sum as the first value
    var sum = 1;
    // set up var sigma as string with first value as the counter to print the output
    var sigma = "1";
    // for loop to add the values to sum and sigma
    for (var i = 2; i<=100; i++) {
        sum += i;
        sigma += " + "+i;
    }
    // print the results
    console.log(sigma);
    console.log(sum);
}
sigma();

// Factorial
function factorial() {
    // multiply all the values from 12 to 1, set up product variable starting at 1 to keep track of the product
    var product = 1;
    // set up factorial variable as a string with 1 to keep track of the process
    var factorial = "1";
    // for loop to multiply and add to factorial output
    for (i=2; i<=12; i++) {
        product *= i;
        factorial += " * "+i
    }
    // print the results
    console.log(factorial);
    console.log(product);
}
factorial();