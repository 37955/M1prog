var huidigeTijd = new Date().getHours();

var lesBeginUur = 9;

var lesEindUur = 16;

 

if (huidigeTijd >= lesBeginUur && huidigeTijd < lesEindUur) {

    console.log("Ik moet op school zijn");

} else {

    console.log("Ik hoef niet op school te zijn");

}

 

var schooldag = "maandag";

if (schooldag === "zaterdag" || schooldag === "zondag") {

  console.log("Lekker uitslapen!")
}
else {

  console.log("Ik moet naar school vandaag");
}
 

    
    