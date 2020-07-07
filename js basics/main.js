console.log("hello world from main");
console.log("hello from Lifted");

// how to write comment in javascript   this is a single line comment
 
/**  
this is a multi line comment 
dkkkkkkkkkkkkkkkkkkkkk
kkkkkkkkkkkkkkkkkkk
*/

// data types in javascript
/**
number   45, 77
string   "  hi "
boolean  means true or false
null      means nothing
undefined  not value declared yet
symbol

*/

// javascript variable   are used to store data

var sayHi = ("welcome to writing javascript variable");
console.log(sayHi);

const result = 34 * 7 + 5 / 3 ;
console.log(result);

let isStudent = true ;
console.log(isStudent);

// alert("Javascript is a nice programming language");


var firstName = ("Lifted");
var lastName = ("Ugheoke");
var myAge = 7;
console.log(myAge)

/** cohersion This is how javascript forces different datatypes together
in thesame variable */
console.log(" My name is " + firstName + " " + lastName + " I am " + myAge + 
" years old ");

// cohersion practice
let sum = 60 + 70;
console.log(" 60 + 70 = " + sum);

let dob = 2019 - myAge;
console.log(dob);

// Operators
let newResult = 3 - (4 / 2) * 2;
console.log(newResult);

var student1 , student2 , student3;
student1 = student2 = student3 = "David";
console.log(student1 , student2 , student3);

// increment
var newAge = myAge + 1;
console.log(newAge);

myAge = myAge + 1;
console.log(myAge);

myAge += 1;
console.log(myAge);

myAge ++;
console.log(myAge);


// decrement
var newAge = myAge - 1;
console.log(newAge);

myAge = myAge - 1;
console.log(myAge);

myAge -= 1;
console.log(myAge);

myAge --;
console.log(myAge);

// switch is  use to test equality

var gender = "male";
switch (gender) {
case "male":  
console.log("Welcome Sir");
break;
case "female": 
console.log("Welcome Ma");
break;
default:
console.log("You Are A Robot");
break;
}

// Tenary Operator
var isMarried = false;
console.log("is James married ? " + (isMarried ? "yes ": "no "
) )

// classwork
var cynthiaMass = 100;
var cynthiaHeight = 1.65;

var emekaMass = 150;
var emekaHeight = 1.80;

var cynthiaBmi = cynthiaMass / (cynthiaHeight * cynthiaHeight);
var emekaBmi = emekaMass / (emekaHeight * emekaHeight);

var higherBmi = cynthiaBmi > emekaBmi;

console.log("is Cynthia's BMI higher than Emeka's BMI ? " + higherBmi );

// typeof helps us determine the variable or datatype
console.log(typeof cynthiaBmi, typeof higherBmi );

// conditional statements
if (cynthiaBmi > emekaBmi) {
console.log("Cynthia wins")     
}else{
console.log("Emeka wins")    
}

var eligibleVoters = 3;
if (eligibleVoters >= 18) {
console.log("You are an eligible voter")    
} else if (eligibleVoters < 18 && eligibleVoters >= 17) {
console.log("Try Again Next Year")    
} else if (eligibleVoters <= 13 && eligibleVoters >= 5) { 
console.log("You Are Far Too Young For This")
} else {
console.log("You Are A Baby")  
}

var combatClass = 3060;
if (combatClass >= 2000 && combatClass <=  3060) {
console.log("You Are A Holy Knight ");
} else if (combatClass >= 3100) {
console.log("You Are A Member Of The Seven Deadly Sins " );
} else if (combatClass >= 25000) {
console.log("You Are A Ten Commandment ");
} 

/** Array It is a container used in holding objects
When creating an array we use array bracket [] */
let studentResult = [56, 97, 100, 115, 112, 36, 34, 33, 92, 11, 10, 7,
55, 57, 93 ];
console.log(studentResult);
console.log(studentResult.length);

const studentNames = ["David", "Paul", "Samuel", "John", "Noel",
"Mart", "Daniel", "James"];
console.log(studentNames);
console.log(studentNames.length);
console.log(studentNames[3]);
console.log(studentNames.indexOf("John"));
studentNames.pop();  //Removes Last Data Item In The Array
console.log(studentNames);
studentNames.shift();  //Removes First Data Item In The Array
console.log(studentNames);
studentNames.push("Emmanuel");  //Adds Data Item To The Last position In The Array
console.log(studentNames);
studentNames.unshift("Achiever");  //Adds Data Item To The First Position In The Array
console.log(studentNames);

//Classwork
var samScores = (97, 94, 99);
var samAverage = (97 + 94 + 99) / 3;
console.log(samAverage);

var danScores = (94, 88, 89);
var danAverage = (94 + 88 + 89) / 3;
console.log(danAverage);

var markScores = (77, 94, 79);
var markAverage = (77 + 94 + 79) / 3;
console.log(markAverage);
if (samAverage > danAverage && samAverage > markAverage) {
console.log("The Winner Is Sam's Team With An Average Of " + samAverage )    
} else if (danAverage > samAverage && danAverage > markAverage) {
console.log("The Winner Is Dan's Average Of " + danAverage)
} else if (markAverage >samAverage && markAverage > danAverage) {
console.log("The Winner Is Mark's Average Of " + markAverage)
} else {
console.log("Its A Tie ")    
}

//Function

function calculateAge(yearOfBirth) {
let currentYear = 2019;
let Age = currentYear - yearOfBirth;
return Age;
}
console.log("I am " + calculateAge(1996) + " years old")

function calculatecombatClass(combatClass) {	
let chandlerCombatClass = 173000;
let powerDifference = chandlerCombatClass - combatClass;
if (chandlerCombatClass > combatClass) {
console.log ("Chandler's Combat Class is  higher than yours ");
} else if (chandlerCombatClass < combatClass) {
console.log("Chandler Will Bow To You ")
} else{
console.log("Its A Stalemate ")
} 
return powerDifference;	
}
console.log(calculatecombatClass(173000) )

function yearsUntilRetirement(dob, jobYear, name) {
const myAge = calculateAge(dob);
const numberOfYears = calculateAge(jobYear);
const ageTillRetirement = 65 - myAge;
const workTillRetirement = 35 - numberOfYears;
if (ageTillRetirement > workTillRetirement) {
console.log("Hello " + name + " You Have " + workTillRetirement +
" Years Before You Retire ");
}
else if (workTillRetirement > ageTillRetirement) {
console.log("Hello " + name +  " You Have " + workTillRetirement +
" Years Before You Retire ");
}
else{
console.log("Hello " + name + " You Have " + workTillRetirement +
" Years Before You Retire ");	
}
}
yearsUntilRetirement(1996, 2010, "John")
yearsUntilRetirement(2001, 2001, "Noel")

let fuel = 199;
function launch_rocket() {
function warning_message() {
console.error("Not Enough Fuel ")
}
if (fuel >= 100) {
// looks like everything is ok
console.log("Looks like there is enough fuel in the rocket")
} else
warning_message();
}
launch_rocket();

console.time();
let arr = new Array(10000);
for (var i = 0; i < arr.length; i++) {
arr[i] = new Object();
}
console.timeEnd()

//Tip/Bill Calculator
// function tipCalculator(bill) {
// var percentage;
// if (bill < 5000) {
// percentage = 0.2;
// }else if (bill >= 5000 && bill < 20000) {
// percentage = 0.15;
// }else{
// percentage = 0.1;
// }
// return percentage * bill;
// }

// var bills = [12400, 4800, 26800];
// var tips = [
// tipCalculator(bills[0]),
// tipCalculator(bills[1]),
// tipCalculator(bills[2]),

// ];

// var finalValues = [bills[0] + tips[0], bills[1] + tips[1],
// bills[2] + tips[2]];

// console.log(tips, finalValues);

// objects and properties
// An Object is an entity element or item =

var student = {
firstName: "James",
lastName: "Aka",	
ca: 34,
exam: 54,
}
console.log(student);
// how to acess different properties in an objects
// dot notation
console.log(student.firstName);

//array notation
console.log(student["firstName"]);

/**dot notation doesnot accept variables because it directly targets the
property of the object but array notation accepts variables;*/
// EXAMPLE
var key = "ca";
console.log(student[key]);

// object.create works better when creating objects that alreadyexist within the
// code
var worker = Object.create(null);
console.log(worker);

worker.job = "Developer";
worker.salary = "5000";

console.log(worker);
var house = {
address: "Gwags",
monthlyRent: 5400,
calcAnnualRent: function() {
annual = 0;
this.annual = this.monthlyRent * 12;
return this.annual;	
}	
};
console.log(house.calcAnnualRent());
console.log(house);

// CHALLENGE
var Mark = {
name: Mark,
// fullName: Mark Samuels,
height: 180,
mass: 90,
// bmi = 0
// "mass" / ("height" * "height") 
}

var John = {
name: John,
// fullName: John Davids,
height: 167,
mass: 68, 
// bmi = 0 
// "mass" / ("height" * "height") 

}
function calculateBmi(name, height, mass) {
bmi = "mass" / ("height" * "height");
// if (calculateBmi(Mark) > calculateBmi(John)) {
// console.log("Mark Samuels Has The Highhest BMI ")
// }else if (calculateBmi(John) > calculateBmi(Mark)) {
// console.log("John Davids Has The Highhest BMI ")
// }
return bmi;
}
console.log(calculateBmi(Mark, 180, 90));
console.log(calculateBmi(John, 167, 68));

// CORRECTION
var mark = {
fullName: "Mark Samuels",
mass: 90,
height: 1.8,
calculateBmi: function() {
this.bmi = this.mass / (this.height * this.height);
return this.bmi;
}
}
// console.log(mark.calculateBmi());

var john = {
fullName: "John Davids",
mass: 68,
height: 1.67,
calculateBmi: function() {
this.bmi = this.mass / (this.height * this.height);
return this.bmi;	
}
}
// console.log(john.calculateBmi());
if (john.calculateBmi() > mark.calculateBmi()) {
console.log("John has the highest BMI");
console.log("Full name ", john.fullName);
console.log("BMI ", john.bmi);
} else if (mark.calculateBmi() > john.calculateBmi()) {
console.log("Mark has the highest BMI");
console.log("Full name ", mark.fullName);
console.log("BMI ", mark.bmi);
} else {
console.log("Mark and John have thesame BMI");
console.log("BMI ", john.bmi)
}

// var johnMass = prompt("What is John's mass in Kg?");
// var johnHeight = prompt("What is John's height in cm?");

// var markMass = prompt("What is Mark's mass in Kg?");
// var markHeight = prompt("What is Mark's height in cm?");

// john.mass = parseFloat(johnMass);
// john.height = parseFloat(johnHeight);

// mark.mass = parseFloat(markMass);
// mark.height = parseFloat(markHeight);

// LOOPS AND INTRACTIONS
for (var index = 0; index <= 20; index++) {
console.log("Hello" + index );
}

var students = ["John ", "Emeka ", "James", "Magaret ", "Elizabeth"];
for (var i = 0; i < students.length; i++)
// if (students[i] === "James") {
// break;
// }
{
console.log(students[i]);	
}

var counter = 0;
while(counter < students.length) {
console.log("Hello " + students[counter]);
counter++;
}

var developers = [
{
name: "Lifted",
language: "HTML"
},
{
name: "Achiever",
language: "CSS"
},
{
name: "Daniel",
language: "HTML"
},
{
name: "Samuels",
language: "Javascript"
},
{
name: "Joel",
language: "PHP"
}
]

developers.map(function(developer){
console.log (developer.name + " codes in " + developer.language);
})

/**John went to 5 restaurants
bills = 12400, 4800, 26800, 18000, 4200.
0.20 if bill < 5000;
0.15 if bill >= 5000 && <= 20000
0.10 if bill > 20000*/

// function tipCalculator(bill) {
// var percentage;
// if (bill < 5000) {
// percentage = 0.2;
// }else if (bill >= 5000 && bill < 20000) {
// percentage = 0.15;
// }else{
// percentage = 0.1;
// }
// return percentage * bill;
// }

// // var bills = [12400, 4800, 26800, 18000, 4200];
// var counter = 0;
// while (counter < bills.length) {
// console.log(bills[counter]);
// // console.log(bills.length);
// counter++;
// }

// var tips = [tipCalculator(bills[counter])];
// var counter = 0;
// while (counter < bills[counter]) {
// console.log(tipCalculator(bills[counter]));
// counter++;
// }

var john = {
fullName: "John Ali ",
bills: [12400, 4800, 26800, 18000, 4200],
calTips: function() {
this.tips = [];
this.finalValues = [];
for (var i = 0; i < this.bills.length; i++) {
var percentage;
var bill = this.bills[i];
if (bill < 5000) {
percentage = 0.2;
}
else if (bill >= 5000 && bill <= 20000) {
percentage = 0.15;
} else {
percentage = 0.1;
}
this.tips[i] = bill * percentage;
this.finalValues[i] = bill + bill + percentage;
}
}
};

var obi = {
fullName: "Obi Peter ",
bills: [7700, 47500, 11000, 4000, 4500],
calTips: function() {
this.tips = [];
this.finalValues = [];
for (var i = 0; i < this.bills.length; i++) {
var percentage;
var bill = this.bills[i];
if (bill < 5000) {
percentage = 0.2;
}
else if (bill >= 5000 && bill <= 20000) {
percentage = 0.15;
} else {
percentage = 0.1;
}
this.tips[i] = bill * percentage;
this.finalValues[i] = bill + bill + percentage;
}
}
};

function calculateAverage(tips) {
var sum = 0;
for (var i = 0; i < tips.length; i++) {
sum = sum +	tips[i];
}
return sum / tips.length;
}
john.calTips();
obi.calTips();
john.average = calculateAverage(john.tips);
obi.average = calculateAverage(obi.tips);
console.log(john, obi);

if (john.average > obi.average) {
console.log(
john.fullName + " 's family pays higher tips with an average of $ "
+ john.average);
} else if (obi.average > john.average) {
console.log(
obi.fullName + " 's family pays higher tips with an average of $ "
+ obi.average);
}

// 09 - 11 - 2019
