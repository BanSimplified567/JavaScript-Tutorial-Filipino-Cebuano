/*
# Tutorial Flow

- LOGICAL Operators
- AND Operator
- OR Operator
- NOT Operator
- NESTED Conditional Statement

*/

/*
# LOGICAL Operators
- Are used in combination with conditional statement to create more complex conditions.
- It Allows programmers to put 2 or more conditions in one expression.

- Are operators used to create more complex conditions.
-|------------------------------------------------------------------|
-|       Methods           |               Description              |
-|        &&               |                  AND                   |
-|        ||               |                  OR                    |
-|        !                |                  NOT                   |
-|------------------------------------------------------------------|
*/

/*
# AND Operator
- Both CONDITIONS should be true

// Example
const age = 18;
const experience = 3;

console.log(age >= 18 && experience > 1);
// Output: true

console.log(age >= 18 && experience > 3);
// Output: false
*/

/*
# OR Operator
- Either CONDITIONS should be true

// Example
const hasDegree = true;
const experience = 3;

console.log(hasDegree || experience > 2);
// Output: true

console.log(hasDegree || experience > 4);
// Output: true
*/
/*
# NOT Operator
- Inverts the results of a CONDITION

const hasDegree = true;
const experience = 3;

console.log(!hasDegree);
// Output: false

console.log(!(experience > 1));
// Output: false
*/
/*
# NESTED Conditional Statement
- You can nest conditional statements inside a conditional statement.

// Example
let age = 18;
let experience = 3;

if (age >= 18) {
  if (experience > 1) {
    console.log("You're Hired!");
  } else {
    console.log("You don't have experience");
  }
} else {
  console.log("You are a Minor");
}
*/
