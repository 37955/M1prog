function berekenLeeftijdInJaren(geboorteJaar, geboorteMaand, geboorteDag) {
  const geboortedatum = new Date(geboorteJaar, geboorteMaand - 1, geboorteDag);
  const huidigeDatum = new Date();
  const leeftijdInMilliseconden = huidigeDatum - geboortedatum;
  const leeftijdInJaren = leeftijdInMilliseconden / (1000 * 60 * 60 * 24 * 365.25);

  return leeftijdInJaren;
}

const geboorteJaar = parseInt(prompt("Welk jaar ben je geboren?"));
const geboorteMaand = parseInt(prompt("Welke maand ben je geboren?"));
const geboorteDag = parseInt(prompt("Welke dag ben je geboren?"));

const leeftijd = berekenLeeftijdInJaren(geboorteJaar, geboorteMaand, geboorteDag);
console.log(`Je bent ongeveer ${leeftijd.toFixed(2)} jaar oud.`);
