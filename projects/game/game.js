let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let time = 300;
let wentOnRide = false;
let ridesWentOn = 0;
let foodJustEaten = false;
let foodEaten = 0;

//If you need, add any "helper" functions here
function throwUpCheck(){
	if (wentOnRide == true && foodJustEaten == true){
		clear();
		print("\nYou threw up! game over...");
		gameActive = false;
	}
}
function timeCheck(){
	if (time <= 0){
		if (ridesWentOn >= 4 && foodEaten >= 2){
			print("\nYou had a great day! Congrats you beat the game.");
			gameActive = false;
		}
		else{
			print("\nYou got to the end of the day... but at what cost? you didn't have fun :(");
			gameActive = false;
		}
	}
}

function tiredCheck(){
		if (wentOnRide == true && ridesWentOn >= 2 && gameActive == true){
			time = time - 120;
			wentOnRide = false;
			print("\nYou blacked out after going on multiple rollercoasters in a row...");
			print("\nYou awaken and see you've lost 2 hours...");
		}
}

//Make one function for each location
function locationCar() {
    clear();
    print("\nYou are in the car!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tPlaza");
    
    function processInput(input){
        if (input.toLowerCase() == "plaza") {
            locationPlaza();
        } else {
            stayHere();
            waitThenCall(locationCar);
        }
    }
    waitForInput(processInput);
}

function locationPlaza(){
	clear();
    print("\nYou are in the plaza!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tRides" + "\n\tFood Court" + "\n\tBench");
    
    function processInput(input){
        if (input.toLowerCase() == "rides") {
            	locationRides();
        }
	else if (input.toLowerCase() == "food court"){
		locationFoodCourt();
	}
	else if (input.toLowerCase() == "bench"){
		locationBench();
	}
	else {
            	stayHere();
            	waitThenCall(locationPlaza);
        }
    }
    waitForInput(processInput);
}


function locationPlazaReturn(){
if (gameActive == true){
    print("\nYour back at the plaza!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tRides" + "\n\tFood Court" + "\n\tBench");
    
    function processInput(input){
        if (input.toLowerCase() == "rides") {
           	locationRides();
        }
	else if (input.toLowerCase() == "food court"){
		locationFoodCourt();
	}
	else if (input.toLowerCase() == "bench"){
		locationBench();
	}
	else {
           	stayHere();
           	waitThenCall(locationPlaza);
        }
    }
    waitForInput(processInput);
}
}

function locationBench(){
	clear();
	print("\nYou are on the bench!");
	print("\nWhat would you like to do?" + "\n\tRest" + "\n\tSleep");
	function processInput(input){
		if (input.toLowerCase() == "rest"){
			wentOnRide = false;
			foodJustEaten = false;
			time = time - 15;
			print("\nYou rested for 15 minutes, but you're feeling much better! Go have some fun.");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		}
		else if (input.toLowerCase() == "sleep"){
			wentOnRide = false;
			foodJustEaten = false;
			time = time - 60;
			foodEaten = foodEaten - 1;
			print("\nYou dozed off peacefully, but it's been 60 minutes and you're starving, get up!");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		}
		else{
			stayHere();
			waitThenCall(locationPlaza);
		}
	}
	waitForInput(processInput);
}

function locationFoodCourt(){
	clear();
	print("\nYou are at the food court");
	print("\nWhere do you want to go next? Say one of these choices:" + "\n\tMcDonalds" + "\n\tSubway" + "\n\tDunkin Donuts");
	function processInput(input){
		if (input.toLowerCase() == "mcdonalds"){
			locationMcDonalds();
		}
		else if (input.toLowerCase() == "subway"){
			locationSubway();
		}
		else if (input.toLowerCase() == "dunkin donuts"){
			locationDunkinDonuts();
		}
		else{
			stayHere();
			waitThenCall(locationFoodCourt);
		}
	}
	waitForInput(processInput);
}

function locationMcDonalds(){
	clear();
	print("\nYou are at Mcdonalds!");
	print("\nWhat would you like to get?" + "\n\tFrench Fries" + "\n\tMilkshake" + "\n\tBig Mac");
	function processInput(input){
		if (input.toLowerCase() == "french fries"){
			foodJustEaten = true;
			time = time - 20;
			foodEaten = foodEaten + 1;
			print("\nThe fries were so good! they were crisp and crunchy, but you should take a rest...");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		}
		else if (input.toLowerCase() == "milkshake"){
			foodJustEaten = true;
			time = time - 60;
			foodEaten = foodEaten + 1;
			print("\nThe milkshake was thick and nice, but you remember that your lactose intolerant... So you run to the bathroom");
			print("\nIt's been a hour.");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		}
		else if (input.toLowerCase() == "big mac"){
			foodJustEaten = true;
			time = time - 20;
			foodEaten = foodEaten + 1;
			print("\nThe big mac was giant and filling, but you should take a rest...");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		}
		else{
			stayHere();
			waitThenCall(locationMcDonalds);
		}
	}
	waitForInput(processInput);
}

function locationSubway(){
	clear();
	print("\nYou're at subway!");
	print("\nWhat sub do you want?" + "\n\tThe Philly" + "\n\tThe Monster" + "\n\tThe Outlaw");
	function processInput(input){
		if (input.toLowerCase() == "the philly"){
			foodJustEaten = true;
			time = time - 25;
			foodEaten = foodEaten + 1;
			print("\nThe philly was good... but it took 25 minutes, maybe rest then go on another ride!");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		}
		else if (input.toLowerCase() == "the monster"){
			foodJustEaten = true;
			time = time - 25;
			foodEaten = foodEaten + 1;
			print("\nThe monster was good... but it took 25 minutes, maybe rest then go on another ride!");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		}
		else if (input.toLowerCase() == "the outlaw"){
			foodJustEaten = true;
			time = time - 25;
			foodEaten = foodEaten + 1;
			print("\nThe outlaw was good... but it took 25 minutes, maybe rest then go on another ride!");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		}
		else{
			stayHere();
			waitThenCall(locationSubway);
		}
	}
	waitForInput(processInput);
}

function locationDunkinDonuts(){
	clear();
	print("\nYou are at dunkin donuts!");
	print("\nWhat donut do you want?" + "\n\tPlain Donut" + "\n\tChocolate Donut" + "\n\tVanilla Donut")
	function processInput(input){
		if (input.toLowerCase() == "plain donut"){
			foodJustEaten = true;
			time = time - 10;
			foodEaten = foodEaten + 1;
			print("\nThe donut was a bit plain, but it only took 10 minutes, maybe rest then go on another ride!");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		}
		else if (input.toLowerCase() == "chocolate donut"){
			foodJustEaten = true;
			time = time - 15;
			foodEaten = foodEaten + 1;
			print("\nThe donut was sweet, and it only took 15 minutes, maybe rest then go on another ride!");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		}
		else if (input.toLowerCase() == "vanilla donut"){
			foodJustEaten = true;
			time = time - 10;
			foodEaten = foodEaten + 1;
			print("\nThe donut was sweet, and it only took 15 minutes, maybe rest then go on another ride!");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		}
		else{
			stayHere();
			waitThenCall(locationDunkinDonuts);
		}
	}
	waitForInput(processInput);
}

function locationRides(){
	clear();
	print("\nYou are at the rides!");
	print("\nWhere do you want to go next? Say one of these choices:" + "\n\tCandy Apple Grove" + "\n\tJungle X-Pedition" + "\n\tOld Virginia");
	function processInput(input){
		if (input.toLowerCase() == "candy apple grove"){
			locationCandyAppleGrove();
		}
		else if (input.toLowerCase() == "jungle x-pedition"){
			locationJungleXPedition();
		}
		else if (input.toLowerCase() == "old virginia"){
			locationOldVirginia();
	        } else{
		stayHere();
		waitThenCall(locationRides);
	}
	}
	waitForInput(processInput)
}



function locationCandyAppleGrove(){
	clear();
	print("\nYou are at Candy Apple Grove!");
	print("\nWhich ride would you like to go on?" + "\n\tTwisted Timbers" + "\n\tApple Zapple");
	function processInput(input){
		if (input.toLowerCase() == "twisted timbers"){
			wentOnRide = true;
			time = time - 30;
			ridesWentOn = ridesWentOn + 1;
			print("\nYou had a sweet blast! but it's been 30 minutes, you should take a break and rest.");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		}
		else if (input.toLowerCase() == "apple zapple"){
			wentOnRide = true;
			time = time - 30;
			ridesWentOn = ridesWentOn + 1;
			print("\nYou had a sweet blast! but it's been 30 minutes, you should take a break and rest.");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		} else {
			stayHere();
			waitThenCall(locationCandyAppleGrove);
		}
	}
	waitForInput(processInput);
}
function locationJungleXPedition(){
	clear();
	print("\nYou are at the jungle x-pedition!");
	print("\nWhich ride would you like to go on?" + "\n\tPantherian" + "\n\tRapterra");
	function processInput(input){
		if (input.toLowerCase() == "pantherian"){
			wentOnRide = true;
			time = time - 30;
			ridesWentOn = ridesWentOn + 1;
			print("\nYou had a roaring blast! but it's been 30 minutes, you should take a break and rest.");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		}
		else if (input.toLowerCase() == "rapterra"){
			wentOnRide = true;
			time = time - 30;
			ridesWentOn = ridesWentOn + 1;
			print("\nYou had a roaring blast! but it's been 30 minutes, you should take a break and rest.");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		} else {
			stayHere();
			waitThenCall(locationJungleXPedition);
		}
	}
	waitForInput(processInput);
}
function locationOldVirginia(){
	clear();
	print("\nYou are in Old Virginia!");
	print("\nWhich ride would you like to go on?" + "\n\tGrizzly" + "\n\tReptillian");
	function processInput(input){
		if (input.toLowerCase() == "grizzly"){
			wentOnRide = true;
			time = time - 30;
			ridesWentOn = ridesWentOn + 1;
			print("\nYou had a old time blast! but it's been 30 minutes, you should take a break and rest.");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		}
		else if (input.toLowerCase() == "reptillian"){
			wentOnRide = true;
			time = time - 30;
			ridesWentOn = ridesWentOn + 1;
			print("\nYou had a blast! but it's been 30 minutes, you should take a break and rest.");
			throwUpCheck();
			timeCheck();
			tiredCheck();
			locationPlazaReturn();
		} else {
			stayHere();
			waitThenCall(locationOldVirginia);
		}
	}
	waitForInput(processInput);
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my adventure! Press any key to start");

    function processInput(input){
            locationCar();
    }
    waitForInput(processInput);
}
