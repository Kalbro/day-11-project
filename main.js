// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(num1, num2){
  if (num1 > num2){
  return num1;
}else{
  return num2;
}
}
console.log(max(1,2))


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(num1, num2, num3){
  if ((num1 > num2) && (num1 > num3)){
    return num1;
  }else if (num2 > num3){
    return num2;
  }else{
      return num3;
    }
    }

console.log(maxOfThree(1,2,3))


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
  if (char.toLowerCase() === 'a' ||
      char.toLowerCase() === 'e' ||
      char.toLowerCase() === 'i' ||
      char.toLowerCase() === 'o' ||
      char.toLowerCase() === 'u' ||
      char.toLowerCase() === 'y'){
    return true;
  }else{
    return false;
  }
  }
  console.log(isVowel('k'))
    // Your answer here



// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum(x,y){
  return x + y;
}
console.log(sum(2,3))


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(a,b,c){
  return (a + b + c)/3;

}

console.log(avg(1,9,3))


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(x){
  return x.length;
}
console.log(getLength("kristen"))


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(a,b){
  if (a < b){
  return true;
}else{
  return false;
}
}
console.log(greaterThan(10,5))

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(name){
  return ("Hello," + " " + name + "!");
}

console.log(greet("kris"))



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib(a,b,c,d){
  return ("the"+ " " + a + " " + b + " "+ "over" + " " + "the" + " " + c + " " + d );
}

console.log(madlib("dog", "jumps", "big", "log"))
