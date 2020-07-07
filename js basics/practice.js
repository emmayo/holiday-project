for (var i = 0; i <= 10; i++) {
console.log("I Am Lifted " + i );
}
// for (var index = 0; index <= 20; index++) {
// console.log("Hello" + index );
// }

var arch = ["Sariel", "Tarmiel", "Ludociel", "Mael" ];
var counter = 0;
while (counter < arch.length) {
console.log("The Archs are " + arch[counter]);
counter++;
}

var commandments = ["Zeldris", "Estarossa", "Monspeet", "Derieri", "Drole",
"Gloxinia", "Melascula", "Grayroad", "Fraudrin", "Galand" ];
var counter = 0;
while (counter < commandments.length) {
console.log(commandments[counter] + " is a ten commandment" );
counter++;
}

var curses = ["'Piety'", "'Love'", "'Reticence'", "'Purity'", "'Patience'", 
"'Repose'", "'Faith'", "'Pacifism'", "'Selflessness'", "'Truth'"];
var counter = 0;
while (counter < commandments.length && counter < curses.length) {
console.log(commandments[counter] + " is the commandment of " + curses[counter]);
counter++;
} 

var graces = ["'Tornado'", "'Ocean'", "'Flash'", "'Sunshine'"]
var counter = 0;
while (counter < arch.length && counter < graces.length) {
console.log(arch[counter] +"'s grace is " + graces[counter]);
counter++;
}

for (var i = 0; i <= 15; i++) {
console.log("Ark" + i);
}

var Chandler = 173000;
var Cusack = 168000;
var Ludociel = 201000;
var Merlin = 220000;
var Meliodas = 142000;
var Gilthunder = 2450;
var Sariel = 97000;
var Zaratras = 3060;
var King = 225000;
var Mael = 400000;
var Zeldris = 61000;

let me = 1000000;
if (me <= 0) {
console.log("You are nothing")
}else if (me >= 0 && me <= 9999) {
console.log("You are a weakling");
}else if (me >= 10000 && me <= 30000) {
console.log("You are strong but not that strong");
}else if (me >= 30001 && me <= 40000) {
console.log("You are really strong but not strong enough to face a stronger opponent");
}else if (me >= 45000 && me <= 60000) {
console.log("You are super strong but not powerful enough to face really strong middle rankers");
}else if (me >= 60001 && me <= 90000) {
console.log("You are extremely strong and have attained 'middle ranker' level");
}else if (me >= 90001 && me <= 120000) {
console.log("You are a 'high ranker'");
}else if (me >= 120001 && me <= 150000) {
console.log("You have earned the title 'higher ranker'");
}else if (me >= 150001 && me <= 180000) {
console.log("You have earned the title 'highest ranker'");
}else if (me >= 180001 && me <= 250000) {
console.log("You have earned the title 'Supreme'");
}else {
console.log("You are a 'Diety'");
}