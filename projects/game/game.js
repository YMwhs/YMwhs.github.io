let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let time = 300;
let wentOnRide = false;
let ridesWentOn = 0;

//If you need, add any "helper" functions here


//Make one function for each location
function locationCar() {
    clear();
    print("\nYou are in the car!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tPlaza");
    
    function processInput(input){
        if (input.toLowerCase() === "plaza") {
            locationPlaza();
        } else {
            stayHere();
            waitThenCall(locationCar);
        }
    }
    waitForInput(processInput);
}

function locationPlaza() {
    clear();
    print("\nYou are in the plaza!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tRides");
    
    function processInput(input){
        if (input.toLowerCase() === "rides") {
            locationRides();
        } else {
            stayHere();
            waitThenCall(locationPlaza);
        }
    }
    waitForInput(processInput);
}

function locationRides(){
	clear();
	print("\nYou are at the rides!");
	print("\nWhere do you want to go next? Say one of these choices:" + "\n\tCandy Apple Grove" + "\n\tJungle X-Pedition" + "\n\tOld Virginia");
	function processInput(input){
		if (input.toLowerCase() === "candy apple grove"){
			locationCandyAppleGrove();
		}
		else if (input.toLowerCase() === "jungle x-pedition"){
			locationJungleXPedition();
		}
		else if (input.toLowerCase() === "old virginia"){
			locationOldVirginia();
	        } else{
		stayHere();
		waitThenCall(locationRides);
	}
	waitForInput(processInput)
	}
}

function locationCandyAppleGrove(){
	clear();
	print("\nYou are at Candy Apple Grove!");
	print("\nWhich ride would you like to go on?" + "\n\tTwisted Timbers" + "\n\tApple Zapple");
	function processInput(input){
		if (input.toLowerCase() === "twisted timbers"){
			wentOnRide = true;
			time = time - 30;
			print("\nYou had a sweet blast! but it's been 30 minutes, you should take a break and rest.");
		}
		else if (input.toLowerCase() === "apple zapple"){
			wentOnRide = true;
			time = time - 30;
			print("\nYou had a sweet blast! but it's been 30 minutes, you should take a break and rest.");
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
		if (input.toLowerCase() === "pantherian"){
			wentOnRide = true;
			time = time - 30;
			print("\nYou had a roaring blast! but it's been 30 minutes, you should take a break and rest.");
		}
		else if (input.toLowerCase() === "rapterra"){
			wentOnRide = true;
			time = time - 30;
			print("\nYou had a roaring blast! but it's been 30 minutes, you should take a break and rest.");
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
		if (input.toLowerCase() === "grizzly"){
			wentOnRide = true;
			time = time - 30;
			print("\nYou had a old time blast! but it's been 30 minutes, you should take a break and rest.");
		}
		else if (input.toLowerCase() === "reptillian"){
			wentOnRide = true;
			time = time - 30;
			print("\nYou had a blast! but it's been 30 minutes, you should take a break and rest.");
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
