var readlineSync = require('readline-sync');



console.log('Hello World')

var name = "Jan Janman"

var age = "20"

var strength = "800"

var speed = "50"

var jumpforce = "20"

var health = "healthy"

var vehicle = "none"

var specialpower = "super strength"

var level = "570"

var lives = "1"

var wins = "5"

 

console.log("Name: " + name)

console.log('Age: ' + age)

console.log('Strength: ' + strength)

console.log('Speed: ' + speed)

console.log('Jumpforce: ' + jumpforce)

console.log('Health: ' + health)

console.log('Vehicle: ' + vehicle)

console.log('Special power: ' + specialpower)

console.log('Level: ' + level)

console.log('Lives: ' + lives)

console.log('Wins: ' + wins);

//opdracht B
var readlineSync = require('readline-sync');
 
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
 
// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');
//opdracht C
var vers1 = "Een bliksemschicht flitst"

var vers2 = "en een purperreiger schreeuwt"

var vers3 = "in de duisternis."

 

console.log(vers1,vers2,vers3)