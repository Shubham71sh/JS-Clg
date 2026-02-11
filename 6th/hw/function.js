//  1
// function Even(num){
//     if(num % 2 === 0){
//         console.log("even");
//     }
//     else{
//         console.assertlog("odd");
//     }
// }
// Even(44);

// 2
// function Max(a,b){
//     if(a>b){
//         console.log("A is greater");
//     }
//     else{
//         console.log("B is greater");
//     }
// }
// Max(87,32);

// 3
// function Three(a,b,c){
//     if(a>b && a>c){
//         console.log("A is greater");
//     }
//     else if(b>c){
//         console.log("B is greater");
//     }
//     else{
//         console.log("C is greater");
//     }
// }
// Three(65,13,37);

// 4
// function Sue(n){
//     sum = 0;
//     for(i=0;i<=n;i++){
//         sum = sum + i;
//     }
//     console.log(sum);
// }
// Sue(6);

// 5
// function factorial(val){
//     let fact = 1;
//     if(val < 0){
//         console.log("not define for a negative");
//     }
//     else{
//         for(let i=1;i<=val;i++){
//             fact = fact * i;
//             }
//             console.log("factorial of",val,"is",fact);
//     }
// }
// factorial(5);

// 6
// function reverse(num){
//     let rev = 0;
//     while(num > 0){
//         let lastdigit = num % 10;
//         rev = rev * 10 + lastdigit;
//         num = Math.floor(num / 10);
//     } 
//     return rev;
// }
// console.log(reverse(1234));

// 7
// function Palindrome(num){
//     let original = num;
//     let rev = 0;

//     while(num > 0){
//         let last = num % 10;
//         rev = rev * 10 + last;
//         num = Math.floor(num/10);
//     }
//     return original === rev;
// }
// console.log(Palindrome(121));

// 8
// function prime(num){
//     if(num<=1)
//         return false;
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(prime(7));

// 9
// function Countdigit(num){
//     if(num ===0)
//         return 1;
//     let count = 0;

//     while(num > 0 ){
//         num = Math.floor(num/10);
//         count++;
//     }
//     return count;
// }
// console.log(Countdigit(43554342));

// 10
// function Fizzbuzz(){
//     for(let n=1;n<=50;n++){
//         if(n % 3 === 0 && n % 5 === 0){
//             console.log(n,"FizzBuzz");
//         }
//         else if(n % 3 === 0){
//             console.log(n,"Fizz");
//         }
//         else if(n % 5 === 0){
//             console.log(n,"Buzz");
//         }
//         else{
//             console.log("none");
//         }
//     }
// }
// Fizzbuzz(35);

// 11
// function Vowels(str){
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         let ch = str[i].toLowerCase();
//         if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
//         count++;
//         }
//     }
//     return count;
// }
// console.log(Vowels("sheienjsoue"));

// 12
// function Reverse(str){
//     let rev = "";
//     for(let i=str.length-1;i>=0;i--){
//         rev = rev + str[i];
//     }
//     return rev;
// }
// console.log(Reverse("good"));

// 13
// function Capital(str){
//     return str[0].toUpperCase()+ str.slice(1);

// }
// console.log(Capital("devashish"));

// 14
// function Frequency(str){
//     let freq = {};
//     for(i=0;i<str.length;i++){
//         let ch = str[i];
//         if(freq[ch]){
//             freq[ch] = freq[ch] + 1;
//         }
//         else{
//             freq[ch]=1;
//         }
//     }
//     return freq;
// }
// console.log(Frequency("shubhamshsa"));

// 15
// function long(str){
//     let word = str.split(" ");
//     let longest = "";

//     for(let i=0;i<word.length;i++){
//         if(word[i].length > longest.length){
//             longest = word[i];
//         }
//     }
//     return longest;
// }
// console.log(long("hey, do you want to play football."))

// 16
// function sum(num){
//     sum = 0;
//     while(num>0){
//         sum = sum + (num%10);
//         num =Math.floor(num/10);
//     }
//     return sum;
// }
// console.log(sum(12345));

// 17
// function multiply(num){
//     let product = 1;
//     while(num>0){
//         product = product * (num % 10);
//         num = Math.floor(num/10);
//     }
//     return product;
// }
// console.log(multiply(165));

// 18
// function armstrong(num){
//     let temp =num;
//     let sum = 0;
//     while(temp > 0){
//         let digit = temp % 10;
//         sum = sum + (digit*digit*digit);
//         temp = Math.floor(temp /10);
//     }
//     return sum === num;
// }
// console.log(armstrong(153));

//  19
// function Digit(str){
//     if(str%2===0){
//         return even;
//     }
//     else{
//         return odd;
//     }
    
// }
// console.log(Digit(12345));

// 20
// function countEvenOdd(num) {
//     let even = 0;
//     let odd = 0;

//     while (num > 0) {
//         let digit = num % 10;

//         if (digit % 2 === 0) {
//             even++;
//         } else {
//             odd++;
//         }

//         num = Math.floor(num / 10);
//     }

//     return { even: even, odd: odd };
// }

// console.log(countEvenOdd(12345));

// 21
// function pattern(n){
//     for(let i=1;i<=n;i++){
//         let row = "";

//         for(let j=1;j<=i;j++){
//             row = row + "*";
//         }
//     console.log(row);
//     }
// }

// pattern(5);

// 22
// function gcd(a, b) {
//     let hcf = 1;

//     for (let i = 1; i <= Math.min(a, b); i++) {
//         if (a % i === 0 && b % i === 0) {
//             hcf = i;
//         }
//     }

//     return hcf;
// }

// console.log(gcd(12, 18));

// 23
// function countDigit(num, digit) {
//     let count = 0;

//     while (num > 0) {
//         let lastDigit = num % 10;

//         if (lastDigit === digit) {
//             count++;
//         }

//         num = Math.floor(num / 10);
//     }

//     return count;
// }

// console.log(countDigit(1223342, 2));

// 24
function convertTemperature(value, unit) {
    if (unit === "C") {
        return (value * 9/5) + 32;
    } else if (unit === "F") {
        return (value - 32) * 5/9;
    } else {
        return "Invalid unit! Use 'C' or 'F'.";
    }
}

console.log(convertTemperature(25, "C")); 
console.log(convertTemperature(77, "F"));



