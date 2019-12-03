

/*
How do we assign a value to a variable?
How do we change the value of a variable?
How do we assign an existing variable to a new variable?
Remind me, what are declare, assign, and define?
What is pseudocoding and why should you do it?
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 


1. We assign a value to a variable by delcaring the variable first then using the equals sign. To assign it a value.

2. We can change the value of the variable by using the same declaration process  described in step one in a seperate code block.

3. We can assign a new value to a variable by using the same syntax to declar it the first time in a diferent code block,

4. Declare is to "create a variable". ie: let makeNew.  Assigning is using the equals sign as an assignment operator ie makeNew = 4. 

5. psudo code is "legible" text describing in plain English(usally in a commentted out line on a file) what the code is doing. 
  It's important to do it so that others who look can quickly and easily figure out what the code does. 

6. The majority of the time should be spend thinking about how to solve a problem.  One should begin coding once they have an idea of how to solve the problem.

B. Strings
Create a variable called firstVariable.
Assign it the value of the string "Hello World"
Change the value of this variable to some number.
Store the value of firstVariable in a new variable called secondVariable
Change the value of secondVariable to any string.
What is the value of firstVariable?
Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " 
and the variable yourName so that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean.
*/

/* 
let firstVariable = "Hello World"
firstVariable = 5 
let secondVariable = firstVariable
secondVariable = "Any string"

let yourName = "Yani"

console.log("Hello my name is" +  yourName)

*/


/*
  
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a <= b);
  console.log(c >= d);
  console.log('Name' == 'Name');
  // // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a != b || c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression)
  console.log(a === a != d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

  */

//   The farm
// Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit.

/* let animal = "dog" 
if  (animal == "cow"){
    console.log("Mooo");
   }
else if(animal != "cow"){
    console.log("Hey you're not a cow.");
}

  */

  /* Make a variable that holds a person's age. Be semantic.

Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16,
 a message should print "Sorry, you're too young."
*/

/*
let age = 2
if (age >= 16) {
  console.log("Here are the keys!")
}
else if (age < 16){
  console.log("Sorry you're too young")

}

*/


/*Remember: USE let when you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++)

This is NO GOOD: for(let i = 0; i < 100; i++)

A. The basics
Write a loop that will print out all the numbers from 0 to 10, inclusive.

Write a loop that will print out all the numbers from 10 up to and including 400.

Write a loop that will print out every third number starting with 11 and going no higher than 4000.
*/


// for(let i = 0; i <= 10; i++)
//   console.log(i)


// for(let i = 0; i <= 400; i++)
//   console.log(i)

// for(let i = 11; i < 4001; i++) 
//   if(i % 3 == 0) console.log(i)


//     Get even
// Print out the numbers that are within the range of 1 - 100.

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".

// for(let i = 1; i <= 100; i++)
//   if(i % 2 == 0)console.log(i +  " is an even number")
  
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// Example Output:

// I found a 5. High five!
// I found a 10. High five!

// dd to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// Example Output:


// for(let i = 0; i <= 100; i++)
// if(i % 5 == 0) console.log("I found a number high five")
//   else if(i % 3 == 0) console.log("Three's a crowd")



// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers 
// between 1 - 100 multiplied by 2.



//let bankAccount = function payCheck(){}

  for(let i = 1; i <= 10; i+i)
  

 

// let bankAccount = 


// for(let i = 2; i <= 9; i++){
//   console.log(i)
// };

/*

A. Talk about it:
What are the things in an array called?

They are called elements

Do Arrays guarantee those things will be in order?

Yes, the order starts at 0 and proceeds in a linear order if [0,1,2,3,4]

What real-life thing could you model with an array?

weather pattern data 

*/

//Create an array that contains three quotes and store it in a variable called quotes.

// let quotes ["liv and let die",  "fisrt of all",  "I'm ready"]

