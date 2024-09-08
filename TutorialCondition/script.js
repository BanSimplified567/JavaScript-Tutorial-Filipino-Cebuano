/*
# Tutorial Flow

- CONDITIONAL Statement
- COMPARISION Statement
- IF Statement
- ELSE Statement
- ELSE IF Statement

*/

/*
# CONDITIONAL Statement
- Are statements that executes actions depending on different conditions.

- They are used with Comparision Operators and Logical Operators.
*/

/*
# COMPARISION Statement
- Are operators used to compare 2 values.

-|--------------------------------------------------------------------|
-|       Operators          |               Description               |
-|        ==                |                  Equal                  |
-|        ===               |           Equal Value and Type          |
-|        !=                |                 Not Equal               |
-|        !==               |         Not Equal Value and Type        |
-|--------------------------------------------------------------------|
- Always outputs true or false

// Example
const x = 5;

== equal to
console.log(x == 8)	false
console.log(x == 5)	true
console.log(x == "5")	true

===	equal value and equal type
console.log(x === 5)	true
console.log(x === "5")	false

!=	not equal
console.log(x != 8) true

!==	not equal value or not equal type
console.log(x !== 5)	false
console.log(x !== "5")	true
console.log(x !== 8)	true
*/

/*
# COMPARISION Statement
- Are operators used to compare 2 values.

-|--------------------------------------------------------------------|
-|       Operators          |                 Description             |
-|          >               |                 Greater Than            |
-|          <               |                  Less Than              |
-|          >=              |             Greater Than or Equal       |
-|          <=              |              Less Than or Equal         |
-|--------------------------------------------------------------------|
- Always outputs true or false

// Example
const let x = 10

>	greater than
console.log(x > 10) false

<	less than
console.log(x < 10) false

>=	greater than or equal to
console.log(x >= 10) 	true

<=	less than or equal to
console.log(x <= 10) 	true

*/

/*
# IF Statement
- Used that IF keywords and {} to check for a certain condition.

// Example
const age = 18

if(age >= 18){
console.log("Legal Age")
}
console.log("Thank You!")

- The code inside {} will only be executed if the comparision is true
*/

/*
# ELSE Statement
- Uses the ELSE keyword and {} it is used in combonation with the IF keyword

// Example
const age = 18

if(age >= 18){
console.log("Legal Age")
} else{
 console.log("Minor Age")
}
console.log("Thank You!")

- ELSE runs when the IF comparison is false.
*/

/*
# ELSE IF Statement
- Uses the ELSE IF keyword and {} it is used in combinations with the IF keyword if you want additional specific conditions. You can add as many as you want.

// Example
const age = 18

if(age >= 18){
console.log("Legal Age")
} else if (age <= 0){
 console.log("Invalid Age")
} else{
 console.log("Minor Age")
}
console.log("Thank You!")

- ELSE IF runs sequentially when the IF comparison is false.
*/
