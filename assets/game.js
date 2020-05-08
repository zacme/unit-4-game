var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    green: {
        name: "Green",
        value: 0
    },  
    red: {
        name: "Red",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    }
};

var targetScore= 0;
var yourScore = 0;
var winCount = 0;
var lossCount = 0;

//Function
var getRandom = function(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
//Starting a game
var startGame= function() {
    var yourScore = 0;
    
    targetScore = getRandom(19, 120);

    crystal.blue.value = getRandom(1,12);
    crystal.green.value = getRandom(1,12);
    crystal.red.value = getRandom(1,12);
    crystal.yellow.value = getRandom(1,12);


    //change the html to reflect the currentscore and targetscore
    $("#currentScore").html(yourScore);
    $("#targetScore").html(targetScore);

    //console log scores

    console.log("-----------------------------");
    console.log("Target Score is: " + targetScore)
    console.log("Blue score is: " + crystal.blue.value + " | Green Score is: " + crystal.green.value + " | Red score is: " + crystal.red.value + " | Yellow scores is: " + crystal.yellow.value)
    console.log("-----------------------------");

    //change the html to reflect the currentscore and targetscore
    $("#yourScore").html(yourScore);
    $("#targetScore").html(targetScore);
}

//make a variable
var addValues = function(crystal){
    yourScore = yourScore + crystal.value;

    $("#yourScore").html(yourScore);

    console.log("Your Score is: " + yourScore);
}
//start the game
startGame();

//Main Process
//blue
$('#blue').click(function(){
    addValues(crystal.blue);
});
//green
$('#green').click(function(){
    addValues(crystal.green);
});
//red
$('#red').click(function(){
    addValues(crystal.red);
});
//yellow
$('#yellow').click(function(){
    addValues(crystal.yellow);
});