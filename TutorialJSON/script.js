/*
# TUTORIAL FLOW

- JSON
- JSON Structure
- JSON Read/Write
- JSON Stringify
- JSON Parsing
- JSON Array
*/

/*

# JSON (JavaScript Object Notation)
- Is a file format that is commonly used in transporting data, via API or other means.

// JSON Example
let person = {
   firstname: "BanBan",
   lastname: "Mifu",
   age: 22
}
*/

/*
# JSON Structure
- a JSON Data should have a key | value pair and a colon ':' in the middle JSONs should be surrounded by {}

// JSON Example
let person = {
firstname: "BanBan",
lastname: "Mifu",
age: 22
}

console.log(person)

*/

/*
# JSON Structure
- a JSON can also have array as its value

// JSON Example
let person = {
firstname: "BanBan",
lastname: "Mifu",
age: 22,
hobbies: ["Coding", "Eating", "Sleeping"]
}
*/

/*
# JSON Structure
- a JSON can also have JSONs as its value

// JSON Example
let person = {
   firstname: 'BanBan',
   lastname: 'Mifu',
   age: 22,
   hobbies: ['Coding', 'Eating', 'Sleeping'],
   pets: {
      0: {
         name: 'Drake',
         type: 'Dog',
      },
      1: {
         name: 'Niko',
         type: 'Cat',
      },
   },
};
*/

/*
# JSON Read
- You can READ specific value of a JSON by using its key surrounded by []

// JSON Example
let person = {
   firstname: 'BanBan',
   lastname: 'Mifu',
   age: 22,
};

- Only Works on a "String" Key
console.log(person.firstname);
console.log(person.lastname);
*/

/*
# JSON Read
- You can read array values in a JSON by using its key and accessing it normally by index.

// JSON Example
let person = {
   firstname: 'BanBan',
   lastname: 'Mifu',
   age: 22,
   hobbies: ['Coding', 'Eating', 'Sleeping'],
};

console.log(person['hobbies'][0]);
console.log(person.hobbies[1]);
*/

/*
# JSON Read
- You can read JSON values in a JSON by using its key and accessing it normally by key.

// JSON Example
let person = {
   firstname: 'BanBan',
   lastname: 'Mifu',
   pets: {
      0: {
         name: 'Drake',
         type: 'Dog',
      },
      1: {
         name: 'Niko',
         type: 'Cat',
      },
   },
};

console.log(person['pets'][0]['name']);
console.log(person['pets'][1]['type']);
*/
let person = {
   firstname: 'BanBan',
   lastname: 'Mifu',
   pets: {
      0: {
         name: 'Drake',
         type: 'Dog',
      },
      1: {
         name: 'Niko',
         type: 'Cat',
      },
   },
};

console.log(person['pets'][1]['name']);
console.log(person['pets'][1]['type']);
