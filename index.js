/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS INSIDE OF A FUNCTION (tasks 1d through task 7), IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

// task 1a, 1b, and 1c are not autograded

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/

const votingAge = 18;
console.log(votingAge <= 18 ? 'True' : 'False');  

/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/
let firstVariable = 'first';
const secondVariable = 'second';
firstVariable = secondVariable;
console.log(firstVariable);




/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/
let yearVariable = '1999';
yearVariable = Number(yearVariable);
console.log(yearVariable);



/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a,b){
  return a * b;  
};
let unannouncedResult = multiply(7,8);
console.log(unannouncedResult);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
 1. Invoke the dogYears function below and pass an age value to it
 2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
 3. Return the newly calculated age
*/

function dogYears(age){
  return age * 7;
}



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
1. Invoke the hungryDog function below and pass it a weight value in pounds
2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day

REMEMBER: This program should handle correctly adult AND puppy ages and weights

Feeding Requirements:

Adult Dogs 1 year and older 
   up to 5 lbs - 5% of their body weight
   6 - 10 lbs - 4% of their body weight 
   11 - 15 lbs - 3% of their body weight 
   > 15lbs - 2% of their body weight 

Puppies less than 1 year
   2 - 4 months 10% of their body weight
   4 - 7 months 5% of their body weight 
   7 - 12 months 4% of their body weight
  
NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(weightInLbs,ageInYears){
  if (ageInYears >= 1) {
    return (weightInLbs <= 5 ? weightInLbs * .05 : weightInLbs <= 10 ? weightInLbs * .04 : weightInLbs <= 15 ? weightInLbs * .03 : weightInLbs * .02); 
  } else if (ageInYears < 1) {
    return ((ageInYears >= 2/12 && ageInYears < 4/12) ? weightInLbs * .1 : ageInYears < .583 ? weightInLbs * .05 : weightInLbs * .04); 
  } else {
    return ("Either you entered some crazy data or the dog is less than 2 months old.");
  }
}
hungryDog(4,1);



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

NOTE: Computer must be a global variable. It will be passed into the function as an argument when the function is invoked. 

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
1. Receive 2 parameters the user's choice and the computer's choice
2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
 - win should return "you win!"
 - lose should return "you lose!"
 - tie should return "it's a tie"

RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie

HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/
function computerWeapon() {
  switch(Math.floor(Math.random() * 3)) {
  case 0 : return 'rock';
  break;
  case 1 : return 'paper';
  break;
  case 2 : return 'scissors';
  break;
  default : console.log('Your math function failed to return a 0, 1, or 2 for computer weapon choice.');
  break;
  }
}
function game(user = prompt('Welcome to a rousing round of Stones, Papyrus, Shears!\nPlease choose your weapon of choice and type one of the following: rock, paper, or scissors.')
, computer = computerWeapon()){
  user = user.toLowerCase();
  console.log(`User picks ${user}\nComputer picks ${computer}`);
  if (user === computer) {
    return "it's a tie";
  } else if (user === "rock") {
    return (computer === "paper" ? "you lose!" : "you win!");
  } else if (user === "paper") {
    return (computer === "scissors" ? "you lose!" : "you win!");
  } else {
    return (computer === "rock" ? "you lose!" : "you win!");
  }
}



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
1. Receive a number of kilometers
2. Convert the number of kiolmeters received to miles
3. Return the number of miles
*/

function miles(k){
return k * .621371;
};



//Task 5b - Feet to CM
/*
Using the feet function below do the following:
1. Receive a number of cm
2. Convert the number of cm to feet
3. Return number of feet
*/

function feet(cm){
  return cm / 30.48;
}



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
1. Receive a starting number and start the count down from the number received 
2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
    "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

/*function annoyingSong(startingNumber){
  for (let i = startingNumber; i > 0; i--) {
    return `${startingNumber} bottles of soda on the wall, ${startingNumber} bottles of soda, take one down pass it around ${startingNumber - 1} bottles of soda on the wall`;
  }
}*/
/*function annoyingSong(num) {
  let songArray = [];
  for (let i = num; i > 0; i--) {
    songArray.push(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i - 1} bottles of soda on the wall`);
    }
    console.log(songArray.join('\n'));
    return songArray.join('\n');
}
*/
function retVerse(num) {
 // console.log(num);
 // num = num.toString();
 // console.log(num);
  const verse = num + " bottles of soda on the wall, " + num + " bottles of soda, take one down pass it around " + (num - 1) + " bottles of soda on the wall";
  //let verse = `${num} bottles of soda on the wall, ${num} bottles of soda, take one down pass it around ${num - 1} bottles of soda on the wall`;
  //console.log(verse);
  return verse;
}
function annoyingSong(numIn) {
  for (let i = numIn; i > 0; i--) {
    return (retVerse(i));
  }
}
annoyingSong(5);
/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
1. Receive a score out of 100 
2. Return the corresponding letter grade following this grade scale:

 90-100 should return 'you got an A' 
 80-89 should return 'you got a B'
 70-79 should return 'you got a C'
 60-69 should return 'you got a D'
 below should return 'you got an F'
*/

function grade(score){
  score = Math.floor(score /= 10);
  switch (score) {
    case 10 : return 'you got an A';
    break;
    case 9 : return 'you got an A';
    break;
    case 8 : return 'you got a B';
    break;
    case 7 : return 'you got a C';
    break;
    case 6 : return 'you got a D';
    break;
    default : return 'you got an F';
    break;
  }
}



/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
1. Receive a string as a parameter
2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

HINT - you may need to study tomorrow's content on arrays 
HINT - try looking up the .includes() method
*/


function vowelCounter(daString) {
  return Array.from(daString).filter(val => (val === "a" || val === "e" || val === "i" || val === "o" || val === "u")).length;
}
vowelCounter('hello john roy how are you doing today');



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
module.exports = {
  foo,
  multiply,
  dogYears,
  hungryDog,
  game,
  miles,
  feet,
  annoyingSong,
  grade
}
