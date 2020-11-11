//Jason Ronoastro
//01-11-2020.
//Horeca App. 

//Een variabele om de applicatie te starten.
var startApp = horeca();

//Hieronder staan de dranken prijzen.
const FRIS = 2.00;
const BIER = 4.00;
const WIJN = 5.00;


function horeca() {
	//De gehele functie van de applicatie.
	alert('Welkom bij de digitale horeca app');
	alert('We beginnen eerst met de drank bestelling');
	var drankbestelling = prompt('Type in "drank"');

		if (drankbestelling == "drank") {
			drank();
		} else{
			alert('Type in: drank');
			horeca();
		}

	function drank(){//Een functie voor de dranken.
		alert('Welkom bij de drankbestelling');
		alert('U kunt kiezen uit de categorie: fris of bier of wijn');
		var drankkeuze = prompt('fris of bier of wijn?');

		
	}
}