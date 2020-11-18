//Jason Ronoastro
//01-11-2020.
//Horeca App. 

//Het aantal waar de drank aantallen beginnen. En worden als globale vars gebruikt.
var frisAantal = 0;
var bierAantal = 0;
var wijnAantal = 0;

//De drank prijzen.
const FRIS = 2.00;
const BIER = 4.00;
const WIJN = 5.00;

function horecaDrank() {//De gehele functie drank van de applicatie.
	alert('Welkom bij de digitale horeca app');
	alert('We beginnen eerst met de drank bestelling');
	var drankbestelling = prompt('Type in "drank"');

		if (drankbestelling == "drank") {
			drankKeuze();
		} else{
			alert("U heeft een ongeldige invoer gedaan");
		}

}

//De functie word aangeroepen.
horecaDrank();