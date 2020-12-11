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

//Intro voor de app.
alert('Welkom bij de Digital order app.');
alert('We starten met de dranken bestelling.');

function drinkOrder(){
	while (DrinkChoice = true){
		var DrinkChoice = prompt('Welke bestelling wilt u toevoegen?. fris,bier of wijn. Type stop om naar de rekening te gaan.');
		if(DrinkChoice == "fris"){
			frisAantal = prompt('Hoeveel fris wilt u bestellen?');
			console.log(frisAantal);
		} else if(DrinkChoice == "bier"){
			bierAantal = prompt('Hoeveel bier wilt u bestellen?');
		} else if(DrinkChoice == "wijn"){
			wijnAantal = prompt('Hoeveel wijn wilt u bestellen?');
		} else if(DrinkChoice = "stop"){
			DrinkChoice = false;
			alert('Uw rekening krijgt u nu te zien');
			document.write('Uw aantal bestelde frisdranken = ' + frisAantal + "<br>");
			document.write('Uw aantal bestelde bier dranken = ' + bierAantal + "<br>");
			document.write('Uw aantal bestelde wijn dranken = ' + wijnAantal + "<br>");
			var DrinksTotal = frisAantal*FRIS + bierAantal*BIER + wijnAantal*WIJN;
			document.write('De totale prijs = ' + DrinksTotal +' '+ 'Euro');
			return;
		}  else{
			alert('U heeft een ongeldige invoer gedaan.');
		}
	}





}

//De functies worden hier aangeroepen.
drinkOrder();

