function berekenLeeftijd(geboorteJaar, geboorteMaand, geboorteDag) {
    let geboortedatum = new Date(geboorteJaar, geboorteMaand - 1, geboorteDag); // Maanden zijn 0-11, dus verminder 1 van geboorteMaand.
    let huidigeDatum = new Date();
    let leeftijdInMilliseconden = huidigeDatum - geboortedatum;
    let leeftijdInJaren = leeftijdInMilliseconden / (1000 * 60 * 60 * 24 * 365.25); // 365.25 dagen in een jaar voor schrikkeljaren.
  
    return leeftijdInJaren;
  }
  
  const geboorteJaar = 2007;
  const geboorteMaand = 2;
  const geboorteDag = 27;
  
  const leeftijd = berekenLeeftijd(geboorteJaar, geboorteMaand, geboorteDag);
  console.log(`Je bent ${leeftijd.toFixed(2)} jaar oud`);
  