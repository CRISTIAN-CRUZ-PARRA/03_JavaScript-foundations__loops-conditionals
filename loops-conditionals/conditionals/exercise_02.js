/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/
const age = 20;

function checkAge() {
    if (age < 3) {
        console.log("You're just a baby!");
        return;
    }
    if (age >= 18) {
        // Checking adults first to handle larger ages before moving to smaller ranges
        console.log("Most places consider you an adult.");
        return;
    }
    if (age >= 13) {
        console.log("Nice, you're a teenager!");
        return;
    }
    if (age >= 3) {
        console.log("You are in elementary school, kid.");
        return;
    }

    console.log("What? How did this happen!?");
    return;
}

checkAge();
