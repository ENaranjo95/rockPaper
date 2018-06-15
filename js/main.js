var botScore=0;
var	playerScore=0;
var botsWeapon =0;
var playersWeapon=0;

//Event listener for rock
document.getElementById("rock").onclick = playerThrowsRock;

//Event listener for paper
document.getElementById("paper").onclick = playerThrowsPaper;

//Event listener for scissors
document.getElementById("scissors").onclick = playerThrowsScissors;

//Event listener for spock
document.getElementById("spock").onclick = playerThrowsSpock;

//Event listener for lizard
document.getElementById("lizard").onclick = playerThrowsLizard;

//User chooses rock
function playerThrowsRock(){
	playersWeapon="rock";
	botsWeapon = getRandomWeapon()
	checkWhoWon(botsWeapon,"rock");
}

//User chooses scissors
function playerThrowsScissors(){
	playersWeapon="scissors";
	botsWeapon = getRandomWeapon()
	checkWhoWon(botsWeapon,"scissors");
}

//User chooses paper
function playerThrowsPaper(){
	playersWeapon="paper";
	botsWeapon = getRandomWeapon()
	checkWhoWon(botsWeapon,"paper");
}

//User chooses spock
function playerThrowsSpock(){
	playersWeapon="spock";
	botsWeapon = getRandomWeapon()
	checkWhoWon(botsWeapon,"spock");
}

//User chooses lizard
function playerThrowsLizard(){
	playersWeapon="lizard";
	botsWeapon = getRandomWeapon()
	checkWhoWon(botsWeapon,"lizard");
}

//Random generate weapon for computer
function getRandomWeapon(){
	var randomNumber = Math.random()
	if(randomNumber<=.2){
		botsWeapon="scissors";
	}
	else if(randomNumber<=.4){
		botsWeapon="paper";
	}
	else if(randomNumber<=.6){
		botsWeapon="spock";
	}
	else if(randomNumber<=.8){
		botsWeapon="lizard";
	}
	else{ botsWeapon="rock";
	}
	return botsWeapon;
}

//Comparision user's input vs. computer choice
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayPlayersChoice("You choose " + playersWeapon);
		displayBotsChoice("Computer choose " + botsWeapon);
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="scissors" && playersWeapon=="lizard") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="paper" && playersWeapon=="spock") ||
		(botsWeapon=="rock" && playersWeapon=="lizard") ||
		(botsWeapon=="rock" && playersWeapon=="scissors") ||
		(botsWeapon=="spock" && playersWeapon=="rock") ||
		(botsWeapon=="spock" && playersWeapon=="scissors") ||
		(botsWeapon=="lizard" && playersWeapon=="paper") ||
		(botsWeapon=="lizard" && playersWeapon=="spock")
		){
		displayPlayersChoice("You choose " + playersWeapon);
		displayBotsChoice("Computer choose " + botsWeapon);
		increaseBotScore();
	}
	else{
		displayPlayersChoice("You choose " + playersWeapon);
		displayBotsChoice("Computer choose " + botsWeapon);
		increasePlayerScore();
	}
}

	//Display computer score (+1 win)
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	  //place results in the dom (You lose)
	displayCompleteMessage("Sorry, you're a loser");
}


function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
		//place results in the dom (You win)
	displayCompleteMessage("Congratualtions, you're a Winner");
}

//Display message
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
function displayPlayersChoice(msg){
	document.getElementById("playersChoice").innerHTML=msg;
}
function displayBotsChoice(msg){
	document.getElementById("botsChoice").innerHTML=msg;
}
