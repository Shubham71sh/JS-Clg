// function Iseven(num){
//     if(num%2===0){
//         console.log("Even");
//     }
//     else{
//         console.log("odd");
//     }
// }
// Iseven(4);

// function max(a,b){
//     if(a>b){
//         console.log("A is greater:");
//     }
//     else{
//         console.log("B is greater:");
//     }
// }
// max(212,324);


// function large(a,b,c){
//     if(a>b && a>c){
//         console.log("a is greater");
//     }
//     else if(b>a && b>c){
//         console.log("b is greater");
//     }
//     else{
//         console.log("c is greater")
//     }
// }
// large(64,17,56);


// function sum(n){
//     let sum = 0;
//     for(let i=1;i<=n;i++){
//         sum = sum + i;  
//     }
//     return sum;
// }
// console.log(sum(50));


// function facts(num){
//     let fact =1;
//     if(num < 0){
//         console.log("not define for negative number");
//     }
//     else{
//         for(let i=1;i<=num;i++){
//             fact = fact * i;
//         }
//         console.log("Factorial of",num,"is",fact);
//     }
// }
// facts(5);


// let num = 1234;
// let reverse = 0;

// while (num > 0) {
//     let last = num % 10;      
//     reverse = reverse * 10 + last;
//     num = Math.floor(num / 10);    
// }
// console.log(reverse);


// function isPalindromeNumber(n) {
//   if (n < 0) 
// return false
//   return n === reverseNumber(n)
// }

// function isPrime(n) {
//   if (n <= 1) return false
//   if (n === 2) return true
//   if (n % 2 === 0) return false
//   for (let i = 3; i * i <= n; i += 2) {
//     if (n % i === 0) return false
//   }
//   return true
// }

// function countDigits(n) {
//   let num = Math.abs(n)
//   if (num === 0) return 1
//   let count = 0
//   while (num > 0) {
//     count++
//   }
//     num = Math.floor(num / 10)
//   return count
// }

// function multiple(){
//     for(let val=1;val<=50;val++){

//         if(val % 3=== 0 && val % 5 === 0){
//             console.log(val,"FizzBuzz");
//         }
//         else if(val % 3=== 0){
//             console.log(val,"Fizz");
//         }
//         else if(val % 5 === 0){
//             console.log(val,"Buzz");
//         }
//         else{
//             console.log("not a multiple of 3 nor 5")
//         }
//     }

// }
// multiple();

function countVowels(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    const ch = str[i].toLowerCase()
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") count++
  }
  console.log(count);
}
countVowels("djs");

// function reverseString(str) {
//   let out = ""
//   for (let i = str.length - 1; i >= 0; i--) out += str[i]
//   return out
// }
// function capitalizeFirstLetter(str) {
//   if (str.length === 0) return str
//   return str[0].toUpperCase() + str.slice(1)
// }


// function charFrequency(str) {
//   let freq = {}
//   for (let i = 0; i < str.length; i++) {
//     const ch = str[i]
//     freq[ch] = (freq[ch] || 0) + 1
//   }
//   return freq
// }


// function longestWord(sentence) {
//   let words = sentence.trim().split(/\s+/)
//   let best = ""
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > best.length) best = words[i]
//   }
//   return best
// }


// function sumOfDigits(n) {
//   let num = Math.abs(n)
//   let sum = 0
//   while (num > 0) {
//     sum += num % 10
//     num = Math.floor(num / 10)
//   }
// }
//   return sum

  
// function productOfDigits(n) {
//   let num = Math.abs(n)
//   if (num === 0) return 0
//   let prod = 1
//   while (num > 0) {
//     prod *= num % 10
//     num = Math.floor(num / 10)
//   }
//   return prod
// }


// function isArmstrong(n) {
//   if (n < 0) 
//     return false
//   let digits = []
//   let num = n
//   if (num === 0) digits.push(0)
//   while (num > 0) {
//     digits.push(num % 10)
//     num = Math.floor(num / 10)
//   }


//   let power = digits.length
//   let sum = 0
//   for (let i = 0; i < digits.length; i++) {
//     let d = digits[i]
//     let p = 1
//     for (let j = 0; j < power; j++) p *= d
//     sum += p
//   }
//   return sum === n
// }


// function countEvenOddDigits(n) {
//   let num = Math.abs(n)
//   if (num === 0) return { even: 1, odd: 0 }
//   let even = 0
//   let odd = 0
//   while (num > 0) {
//     let d = num % 10
//     if (d % 2 === 0) even++
//     else odd++
//     num = Math.floor(num / 10)
//   }
//   return { even, odd }
// }


// function printPattern(rows) {
//   let out = []
//   let line = ""
//   for (let i = 1; i <= rows; i++) {
//     line += "*"
//     out.push(line)
//   }
//   return out.join("\n")
// }



// function gcd(a, b) {
//   a = Math.abs(a)
//   b = Math.abs(b)
//   if (a === 0) return b
//   if (b === 0) return a
//   let small = a < b ? a : b
//   let ans = 1
//   for (let i = 1; i <= small; i++) {
//     if (a % i === 0 && b % i === 0) ans = i
//   }
//   return ans
// }


// function countDigitOccurrences(num, digit) {
//   let n = Math.abs(num)
//   let d = Math.abs(digit) % 10
//   if (n === 0) return d === 0 ? 1 : 0
//   let count = 0
//   while (n > 0) {
//     if (n % 10 === d) count++
//     n = Math.floor(n / 10)
//   }
//   return count
// }


// function temperatureConverter(value, type) {
//   if (type === "C") 
//     return value * 9 / 5 + 32
//   if (type === "F") 
//     return (value - 32) * 5 / 9
//   return null
// }


function loginAttempts(correctPassword, attempts) {
  for (let i = 0; i < attempts.length && i < 3; i++) {
    if (attempts[i] === correctPassword) 
        return "Login Successful"
  }
  return "Account Locked"
}
function numberGuessingGame() {
  const readline = require("readline")
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  const target = Math.floor(Math.random() * 20) + 1
  function ask() {
    rl.question("Guess (1-20): ", (ans) => {
      const g = Number(ans)
      if (g > target) {
        console.log("Too high")
        ask()
      } else if (g < target) {
        console.log("Too low")
        ask()
      } else {
        console.log("Correct")
        rl.close()
      }
    })
  }
  ask()
}