/*
# Tutorial Flow

- Arrays
- Create Arrays
- Reading Arrays
- Updating Arrays
- Deleting Arrays
*/

/*
# Arrays
- A variable that can store multiple values. The values inside an array is called an element.
- The number where an element is located is called the index.

## Example
// Array of String
let names = ["BanBan","Jade","Bansimplified"];

// Array of Numbers
let numbers = [3, 6.5,9.35,12.75,7,2];

// Array of Mixed Datatypes
let mixed = ["BanBan", 21, "Jade", true, 3.99];

// Empty Array
let dummy = [];

- You can create any array with different datatypes.
*/

/*
# Array length
- we can use the length property to get the length of an array,

let names = ['BanBan', 'Jade', 'Bansimplified', 'nocodearea'];

console.log(names); // Output: 4

- Elements = 'BanBan', 'Jade', 'Bansimplified', 'nocodearea'
- Index    =    0         1          2               3
*/

/*
# Reading Arrays
- We need to specify the index in order to  access a certain element value.

// Syntax
identifier[index];

// Example
let cars = ["Supra", "Bugatti"];
console.log(cars[0]);
*/

/*
# Updating Arrays
- We need to specify the index in order to change / add a certain element value.

// Syntax
identifier[index];

// Example
let cars = ["Banban", "Jade"];
cars[1] = "Gwapo"
*/

/*
# Updating Arrays
- There are more ways to ADD an element on the array.

-|--------------------------------------------------------------------|
-|        Method            |               Function                  |
-|        length            |  - Use length as an index to add an     |
-|                          |       element to the last index         |
-|       push(value)        |  - Adds an element on the last index    |
-|     unshift(value)       |  - Adds an element on the first index   |
-|--------------------------------------------------------------------|
// Examples
let cars = ['Supra', 'Bugatti', 'honda', 'ford'];

// Add using LENGTH
cars[cars.length] = 'Honda Civic';

// Add using push(value)
cars.push('Yamaha');

// Add using unshift(value)
cars.push('GTR');

console.log(cars);


/*
# Deleting Arrays
- THere are many ways to delete an element on the array.

-|--------------------------------------------------------------------|
-|         Method           |               Function                  |
-|         length           |  - Change length to desired number      |
-|          pop()           |  - Deletes the last element             |
-|       shift(value)       |  - Deletes the first element            |
-|     slice(start,end)     |  - Gets a part of the array             |
-|--------------------------------------------------------------------|
`

*/

let names = ['BanBan', 'Jade', 'Bansimplified', 'nocodearea', 'mifu'];

console.log(names.slice(0, 4));
