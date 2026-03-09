let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function locationCar() {
    clear();
    print("\nYou are in the car!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tPlaza");
    
    function processInput(input){
        if (input.toLowerCase() === "plaza") {
            locationB();
        } else {
            stayHere();
            waitThenCall(locationCar);
        }
    }
    waitForInput(processInput);
}

function locationPlaza() {
    clear();
    print("\nYou are in the plaza!!");
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
	print("\nWhere do you wabt to go next? Say one of these choices:" + "\n\tPantherian" + "\n\tRapterra" + "\n\tDominator" + "\n\tCarousel" + "\n\tWindseeker");
	
	function processInput(input){
		if (input.toLowerCase() === "pantherian"){
			locationPantherian();
	} else{
		stayHere();
		waitThenCall(locationRides);
	}
	}
	waitForInput(processInput);
	function processInput2(input){
		if (input.toLowerCase() === "Rapterra"){
			locationRapterra();
	} else{
		stayHere();
		waitThenCall(locationRides);
	}
	}
	waitForInput(processInput2)
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            locationCar();
    }
    waitForInput(processInput);
}
