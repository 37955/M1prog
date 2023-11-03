
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const randomGetal = Math.floor(Math.random() * 101);

function raadHetGetal() {
  rl.question('Raad het getal tussen 0 en 100: ', (input) => {
    const geradenGetalNummer = parseInt(input);

    if (isNaN(geradenGetalNummer) || geradenGetalNummer < 0 || geradenGetalNummer > 100) {
      console.log('Voer een geldig getal tussen 0 en 100 in.');
      raadHetGetal();
    } else if (geradenGetalNummer < randomGetal) {
      console.log('Het geraden getal is te laag. Probeer opnieuw.');
      raadHetGetal();
    } else if (geradenGetalNummer > randomGetal) {
      console.log('Het geraden getal is te hoog. Probeer opnieuw.');
      raadHetGetal();
    } else {
      console.log(`Gefeliciteerd! Je hebt het juiste getal geraden: ${randomGetal}`);
      rl.close();
    }
  });
}

raadHetGetal();
