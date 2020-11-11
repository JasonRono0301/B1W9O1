//Jason Ronoastro
//01-11-2020.
//Horeca App. 

//Een variabele om de applicatie te starten.
var startDrank = horecaDrank();

//Hieronder staan de dranken prijzen.
const FRIS = 2.00;
const BIER = 4.00;
const WIJN = 5.00;

//Hieronder staan de strings voor als het ongeldig is zodat het ik niet helemaal hoeft te typen.
 "U heeft een ongeldige invoer gedaan";
 "Uw bestelling kan niet worden toegevoegd";


function horecaDrank() {
	//De gehele functie drank van de applicatie.
	alert('Welkom bij de digitale horeca app');
	alert('We beginnen eerst met de drank bestelling');
	var drankbestelling = prompt('Type in "drank"');

		if (drankbestelling == "drank") {
			drank();
		} else{
			alert("U heeft een ongeldige invoer gedaan");
			horecaDrank();
		}

	function drank(){//Een functie voor de dranken.
		alert('Welkom bij de drankbestelling');
		alert('U kunt kiezen uit de categorie: fris of bier of wijn');

		for(i = 0; i != "stop"; i++){//For lus voor de dranken bestelling.
		  	var drankKeuze = prompt('Type in fris of bier of wijn?');
				if(drankKeuze = "fris"){
					var fris = prompt('Hoeveel frisdrank wilt u bestellen?');
					var frisTotaal = FRIS * fris;

				} else if(drankKeuze = "bier"){
					var bier = prompt('Hoeveel bier wilt u bestellen?');
					var bierTotaal = BIER * bier;

				} else if (drankKeuze = "wijn") {
					var wijn = prompt('Hoeveel wijn wilt u bestellen?');
					var wijnTotaal = WIJN * wijn;

				} else {
					alert("Uw bestelling kan niet worden toegevoegd");
				}

				if (drankKeuze == "stop") {

				} else {
					alert( "U heeft een ongeldige invoer gedaan");
				}
		}
		

	}
}