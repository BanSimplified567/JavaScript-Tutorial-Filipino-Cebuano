/*
# TUTORIAL FLOW

- JSON & FOR/IN Loop
- Object.key() Method
- Advice for you
*/

/*
# JSON & FOR/IN Loop
- We can use FOR/IN Loop to ITERATE over all the keys inside a JSON.

// JSON Example
let person = {
  firstname: 'BanBan',
  lastname: 'Mifu',
  age: 22,
};

for (let k in person) {
  console.log(k);
  console.log(person[k]);
  console.log(`${k} : ${person[k]}`);
}
*/

/*
# Object.key() Method
- Returns the keys of a JSON in a array format.

// JSON Example
let person = {
  firstname: 'BanBan',
  lastname: 'Mifu',
  age: 22,
};

const keys = Object.keys(person);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
   console.log(keys[i]);
   console.log(person[keys[i]]);
}

- it's better to use FOR/IN Loop instead of For loop

const size = Object.keys(person).length;
console.log(size);
*/
