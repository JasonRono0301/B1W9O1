//Jason Ronoastro
//01-11-2020.
//Horeca App. 

//Een variabele om de applicatie te starten.
var startDrank = horecaDrank();

//Hieronder staan de dranken prijzen.
const FRIS = 2.00;
const BIER = 4.00;
const WIJN = 5.00;

function horecaDrank() {//De gehele functie drank van de applicatie.
	alert('Welkom bij de digitale horeca app');
	alert('We beginnen eerst met de drank bestelling');
	var drankbestelling = prompt('Type in "drank"');

		if (drankbestelling == "drank") {
			drank();
		} else{
			alert("U heeft een ongeldige invoer gedaan");
			horecaDrank();
		}

	function drank(){//Een functie om de dranken te bestellen.
		alert('Welkom bij de drankbestelling');
		alert('Welk bestelling wilt u toevoegen?');

		for(drankVraag = 0; drankVraag != "stop"; drankVraag++){
			drankVraag = prompt('fris of bier of wijn?');
		}


	}
}