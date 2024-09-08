/*
# Tutorial Flow

- WHILE Loop
- ITERATE Array
- BREAK Keyword
- DO-WHILE Loop

*/
/*
# WHILE Loop
- IS used to execute a block of code, while the condition is meet/true.
// Example
let i = 1;

while (i < 5) {
   console.log('Hello');
   i++;
}

*/

/*
# ITERATE Array
- You can use while loop to read through all the array elements.

// Example 1
let numbers = [2, 4, 6, 8, 10];
let i = 0;

while (numbers[i]) {
   console.log(numbers[i]);
   i++;
}


// Example 2

let people = ['BanBan', 'Jade', 'Bansimplified', 'Mifu'];
let i = people.length - 1;

while (people[i]) {
   console.log(people[i]);
   i--;
}
*/

/*
# Break Keyword
- You can use the break keyword to break out of the loop earlier than expected.

// Example 1
let people = ['BanBan', 'Jade', 'Bansimplified', 'Mifu'];
let i = 0;

while (people[i]) {
   console.log(people[i]);
   i++;
   if (i === 2) {
      break;
   }
}

// Example 2

let people = ['BanBan', 'Jade', 'Bansimplified', 'Mifu'];
let i = 0;
let search = 'Mifu';

while (people[i]) {
   if (people[i] === search) {
      console.log(people[i]);
      break;
   }
   i++;
}

*/

/*
# DO-WHILE Loop
- Always runs the code once before checking the condition.

// Example 1
let i = 0;

do {
   console.log('Hello');
   i++;
} while (i < 5);
*/
