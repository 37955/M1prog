pythagoras(5, 8);

function functie(getal1, getal2){
    if (getal1 > getal2){
        return getal1
    }

    if (getal2 > getal1){
        return getal2
    }

    if(getal1 == getal2){
        return 0
    }
    
}

let result=functie(8, 16);

console.log(result)

function berekenInhoud (lengte, breedte, hoogte){

return (lengte * breedte * hoogte)

}

let kubusInhoud = berekenInhoud(10, 5, 10);
console.log(berekenInhoud(7, 5, 3));

//radius² * π * hoogte
//(radius keer radius) keer pi (Math.Pi) keer hoogte

function cylinder (radius, hoogte){
    return (radius * radius ) * Math.PI * hoogte
}



function pythagoras (a, b){
    var pythagoras = (a * a) + (b * b);
    let antwoord = Math.sqrt(pythagoras);
    console.log(antwoord);
    return antwoord
}

function gemiddelde(G1, G2, G3, G4, G5, G6, G7){
    var opgeteld = G1 + G2 + G3 + G4 + G5 + G6 + G7;
    let antwoord = opgeteld/7;
    console.log(antwoord);
    return antwoord

}

gemiddelde(1, 4, 5, 6 ,8 ,6 ,2);