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
	if(drankbestelling == "drank"){
		alert('U word doorgestuurd om uw dranken te bestellen.');
		drank();//Zodra de prompt string goed is ingevuld dan word je doorgestuurd naar de functie drank.
	} else{
		alert('Type drank in.');
		horecaDrank();
	}

}

function drank() {
	alert('Welkom bij de dranken bestelling');
	var dranken;
	dranken = prompt('Welke drank wilt u bestellen? fris,bier,wijn. Type "stop" als je de bon wilt krijgen.');

		if(dranken == "fris"){
			frisAantal = prompt('Hoeveel aantal frisdranken wilt u bestellen?');
		} else if(dranken == "bier"){
			bierAantal = prompt('Hoeveel aantal bier dranken wilt u bestellen?');
		} else if(dranken == "wijn"){
			wijnAantal = prompt('Hoeveel aantal wijn dranken wilt u bestellen?');
		}

}

//De functies word aangeroepen.
horecaDrank();
drank();
