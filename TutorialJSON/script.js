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

*/

/*
# JSON Structure
- a JSON can also have array as its value

// JSON Example
let person = {
   firstname: 'BanBan',
   lastname: 'Mifu',
   age: 22,
   hobbies: ['Coding', 'Eating', 'Sleeping'],
};
console.log(person);
*/

/*
# JSON Structure
- a JSON can also have JSONs as its value

// JSON Example
let person = {
   pets: {
      'First Pet': {
         name: 'Drake',
         type: 'Dog',
         bloodType: {
            'First Blood Type': 'A',
            'Second Blood Type': 'B',
         },
      },
      'Second Pet': {
         name: 'Niko',
         type: 'Cat',
         bloodType: {
            'First Blood Type': 'O',
            'Second Blood Type': 'AB',
         },
      },
   },
};
console.log(person);

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
   age: 21,
   hobbies: ['Coding', 'Eating', 'Sleeping'],
};

console.log(person['hobbies'][0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);
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

console.log(person['pets'][0]['type']);
console.log(person['pets'][1]['name']);

*/

/*
# JSON Write
- You can UPDATE specific value of a JSON by using its key surrounded by [] and assigning a value to it.

// JSON Example
let person = {
   firstname: 'BanBan',
   lastname: 'Mifu',
   age: 22,
};
*/
/*
// Updating Exiting "Key|Value"
person['firstname'] = 'Jade';
person['lastname'] = 'Bansimplified';
person['age'] = 21;

// Create New "Key|Value"
person['hobbies'] = ['Coding', 'Eating', 'Sleeping'];

console.log(person);
- Assigning a value to a non-existing key will result into adding it.

- Changed the value of "Coding" from hobbies to "Cooking".

let person = {
   firstname: 'BanBan',
   lastname: 'Mifu',
   age: 22,
   hobbies: ['Coding', 'Eating', 'Sleeping'],
};

person.hobbies[0] = 'Cooking';
person.hobbies[1] = 'Playing';

console.log(person);
*/

/*
# JSON Stringify
- You can convert JSON to String. by using JSON.stringify() method.

// JSON Example
let person = {
   firstname: 'BanBan',
   lastname: 'Mifu',
   age: 22,
   hobbies: ['Coding', 'Eating', 'Sleeping'],
};

console.log(person);

let strPerson = JSON.stringify(person);

console.log(strPerson);

*/

/*
# JSON Parsing
- You can convert String to JSON. by using JSON.parse() method.

// JSON Example
let strPerson = `{"firstname": "BanBan", "lastname": "Mifu", "age": 22, "hobbies": ["Coding", "Eating", "Sleeping"]}`;

let person = JSON.parse(strPerson);
console.log(person);


- if a string is invalid it would throw an error at the console.

*/

/*
# JSON Array
- You can also create an Array of JSONs. Which can be maniplated the same way as any other Array.

// JSON Example
let person = [
   {
      firstname: 'BanBan',
      lastname: 'Mifu',
      age: 22,
   },
   {
      firstname: 'Jade',
      lastname: 'Bansimplified',
      age: 21,
   },
   {
      firstname: 'Mifu',
      lastname: 'SoySoy',
      age: 20,
   },
];

console.log(`${person[0].lastname} ${person[0].firstname} ${person[0].age}`);
 */
