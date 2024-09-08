/*
# Tutorial Flow

- SWITCH Statement
- BREAK Keyword
- DEFAULT Keyword
- COMMON Case
*/

/*
# SWITCH Statement
- Are used to execute code depending on a case. It acts like Conditional Statement but can only check equality.

// Example
let difficulty = 1;

switch (difficulty) {
   case 1:
      console.log('Easy');
      break;
   case 2:
      console.log('Normal');
      break;
   case 3:
      console.log('Hard');
      break;
}

# BREAK Keyword
- break; is necessary after a case since it will let the program break out of the switch statement.
- Without it, the switch statement will continue running all code blocks.
*/

/*
# Default Keyword
- Default is used to handle all cases that weren't specified.

// Example
let difficulty = 4;

switch (difficulty) {
   case 1:
      console.log('Easy');
      break;
   case 2:
      console.log('Normal');
      break;
   case 3:
      console.log('Hard');
      break;
   default:
      console.log('Invalid Difficulty');
      break;
}
*/

/*
# COMMON Case
- You can specify two or more cases in a code block

// Example
let difficulty = 4;

switch (difficulty) {
   case 2:
   case 4:
      console.log('Easy');
      break;
   case 3:
   case 5:
      console.log('Normal');
      break;
   default:
      console.log('Invalid Difficulty');
      break;
}


*/
