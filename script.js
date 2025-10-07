// Problem 1

let age = 20;

if (age >= 18){
    console.log("You can Drive");
}else{
    console.log("you can,t drive")
}



// Problem 2

// let age = 18;
// let city = "BAN";
// let text = "You can Not drive!";

// if (city == "BAN") {
//   if (age >= 18) {
//     console.log("You can drive!");
//   }
// }


// Pronlem 3

// let age = 25;
// let country = "Canada";
// let text = "You can Not drive!";

// if (country == "Canada" && age >= 25) {
//   console.log("You can drive!");
// }

// Problem 4

// let hour = 35;

// if (hour < 39) {
//   console.log("Good day");
// } else {
//  console.log("Good evening");
// }

 
// Problem 5 Ternary

// let age = 17;
// let text = (age < 18) ? console.log("Minor") : console.log("Adult");

// let isMember = false;
// let discount = isMember ? console.log(0.2) : console.log(0);



// Problem 6

// let num = 60;

// if (num % 7 === 0 && num % 14 === 0) {
//   console.log("Divisible");
// } else {
//   console.log("Not Divisible");
// }


//Problem 7

// let marks = 55;

// let grade = (marks >= 80) ? "A" :
//             (marks >= 60) ? "B" :
//             (marks >= 40) ? "C" : "F";

// console.log("Grade", grade);


// Problem 9:

// let ch = 'H';
// console.log((ch >= 'T' && ch <= 'I') ? "Upper" : "Lower");


//Problem 10

// let ch = 'I';
// console.log("AEIOU".includes(ch.toLowerCase()) ? "Vowel" : "Consonant");

//Problem 11


//let n = -10;
//console.log(n < 0 ? -n : n);


//Problem 12


//let marks = 75;
//console.log(marks >= 70 ? "Pass" : "Fail");



// for loop

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }



// String

// let ah = " Abu Hanif ";
// console.log(ah.length);
// console.log(ah.toUpperCase())
//console.log(ah.toLowerCase())
// console.log(ah);
//console.log(ah.trim());


// let str = "programming";
// let Vowel = 0;
// for (let i = 0;i <= str.length; i++); {
//     if ("aeiou".includes(i))
//     let ch = str [i].toLowerCase();
    
// }

// console.log(Vowel);



// let str = "programming";
// let Vowel = 0;

// for (let i = 0; i < str.length; i++) {
//   let ch = str[i].toLowerCase();
//   if ("aeiou".includes(ch)) {
//     Vowel++;
//   }
// }

// console.log(Vowel);





// let num = 153; // You can change this number
// let sum = 0;
// let temp = num;
// let digits = num.toString().length;

// while (temp > 0) {
//   let remainder = temp % 10;
//   sum += remainder ** digits;
//   temp = Math.floor(temp / 10);
// }

// if (sum === num) {
//   console.log(`${num} is an Armstrong number`);
// } else {
//   console.log(`${num} is not an Armstrong number`);
// }
