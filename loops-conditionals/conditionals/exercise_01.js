/*
    Create a program that starts with a number variable.
    The program will return whether the variable is even or odd.

    Change the variable to test if it works for different cases.
    Print the result as follows: Number 8 is even | Number 9 is odd.

    HINT: The modulus operator ( % ) is your friend.
*/

console.log("--- Even or Odd Checker Program ---");

let number = 8; // Change this value to test other cases

if (number % 2 === 0) {
    console.log(`Number ${number} is even`);
} else {
    console.log(`Number ${number} is odd`);
}

console.log("--- Check complete ---");
