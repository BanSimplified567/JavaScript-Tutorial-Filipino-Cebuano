/*
#Tutorial Flow

- FOR Loop
- ITERATE Array
- BREAK Keyword
- FOR/IN Loop
- FOR/OF Loop

*/

/*
#FOR Loop
- Is used to execute a block of code, while the condition is meet/true.

// Example
for(variable; condition; operation) {
   console.log('Hello');
}



*/

/*
# ITERATE Array
- You can use for loop to read through all the array elements.

// Example
let people = ['Jade', 'Bansimplified', 'BanBan', 'Mifu'];

for (let i = 0; i < people.length; i++) {
   console.log(people[i]);
}

// Example
for (let i = people.length - 1; i >= 0; i--) {
   console.log(people[i]);
}
*/

/*
# FOR Loop vs WHILE Loop
- For loops are used when the number of iterations are known.
- While loops are used when the number of iterations are unknown.

// Example FOR Loop
let people = ['Jade', 'Bansimplified', 'BanBan', 'Mifu'];

for(let i = 0; i < people.length; i++) {
   console.log(people[i]);
}

// Example WHILE Loop
let people = ['Jade', 'Bansimplified', 'BanBan', 'Mifu'];
let i = 0;

while(people[i]) {
   console.log(people[i]);
   i++;
}
*/

/*
#BREAK Keyword
- You can use the break keyword to break out of a loop earlier than expected.

// Example
let people = ['Jade', 'Bansimplified', 'BanBan', 'Mifu'];

for(let i = 0; i < people.length; i++) {
   console.log(people[i]);
   if(people[i] === 1) {
      break;
   }
}

for(let i = 0; i < people.length; i++) {
   console.log(people[i]);
   break;
}
*/

/*
#FOR/IN Loop
- Are used to iterate over JSONs or Arrays. It returns the key of the index of each item.

// Example
let people = ['Jade', 'Bansimplified', 'BanBan', 'Mifu'];

for (let i in people) {
   console.log(i);
}

for (let i in people) {
   console.log(people[i]);
}
*/

/*
# FOR/OF Loop
- Are used for iterating over Arrays. It returns the value of the index of each element.

// Example
let people = ['Jade', 'Bansimplified', 'BanBan', 'Mifu'];

for (let person of people) {
   console.log(i);
}
for (let person of people) {
   console.log(person);
}
*/

/*
# FOR Loop vs FOR/OF Loop
let people = ['Jade', 'Bansimplified', 'BanBan', 'Mifu'];
let i = 0;

for (let person of people) {
   console.log(`${i + 1}. ${person}`);
   i++;
}
for (let i in people) {
   console.log(`${parseInt(i) + 1}. ${people[i]}`);
}
*/
