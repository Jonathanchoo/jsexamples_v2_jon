// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
const myArray = [1,2,3,4, "hello",true,null];
console.log(myArray.length);

// B) ARRAY METHODS

// i - map function of an array
// Implement your code here
const mappedArray = [1,2,3,4,5,6];

const multiplyArrBy10 = mappedArray.map(item => item * 10);
console.log(multiplyArrBy10);

// ii - filter function of an array
// Implement your code here
const vowels = ["a","e","i","o"];

const filteredVowels = vowels.filter(vowel => vowel === "a" || vowel === "u");
console.log(filteredVowels);

// iii - sort function of an array
// Implement your code here
const nums = [1,2,3,4,5,6];
const names = ["jam", "chris", "max", "lenon"];

// Sort by descending order
// Implement your code here
const descendNums = nums.sort((a,b) => a>b ? -1 : 1);
console.Log("descendNums", descendNums);

const accendNums = nums.sort((a,b) => a>b ? 1 : -1);
console.log ("ascendNums", ascendNums);

// Sort by descending order
// Implement your code here


// iv - reduce function of an array
// Implement your code here

// another approach of applying a reuduce function of an array
// Implement your code here

const numbers = new Array(1, 2, 3, 4); 

const productOfNum = numbers.reduce((a, b)=> a * b);
console.log(product_of_arr);

const teamList = ["Tanna", "Shia Lyn", "Zhi Yan", "Francis"];
teamList.push("Muhaimin");  
console.log("Team 1: " + teamList);




// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here


// ii - for-each loop
// Implement your code here


// iii - do-while loop (execute first, check for the condition later)
// Implement your code here


// iv - while loop (check the conditions first before running the while loop)
// Implement your code here