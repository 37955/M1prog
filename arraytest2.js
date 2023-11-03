let readlineSync = require('readline-sync');
 
let listArray = [];
 
 
 
let boodschapArray  = [];
 
while(true){
    let boodschap = readlineSync.question('Wat wil je doen? Toevoegen (t) of verwijderen (v).');
   
    if(boodschap == "t"){
        let item = readlineSync.question('Wat wil je toevoegen?');
        console.log(item);
        boodschapArray.push(item);
    }else if(boodschap == "v"){
        let item = readlineSync.question('Wat wil je verwijderen?');
        let index  = boodschapArray.indexOf(item);
boodschapArray.splice(index,1);
    }
    console.log(boodschapArray)
}