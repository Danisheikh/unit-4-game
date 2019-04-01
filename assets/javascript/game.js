// Global Variables
//-------------------------------------------

// Crystal Variables

var Crystals = { 
    blue: {
        name: "Blue",
        value: 0
    },
    white: { 
        name: "White",
        value: 0
    },
    green : {
        name: "Green",
        value: 0
    },

    red: {
        name: "Red",
        value: 0
    }
};

// Score (current & target)

var currentScore = 0;
var targetScore = 0;


// Win & loses 
var winCount = 0;
var lossCount = 0;






//  Functions
//-------------------------------------------

//Helper function in order to get a random number
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Starts & Reset the game
var startGame= function() {

    // Reset the curret score
      currentScore = 0; 

    // set the target score 
     targetScore = getRandom(19,120);

    //the different values for each of the crystal
    Crystals.blue.value = getRandom(1,12); 
    Crystals.white.value = getRandom(1,12); 
    Crystals.green.value = getRandom(1,12); 
    Crystals.red.value = getRandom(1,12); 


    // change the HTML to reflect all the changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);


    // Testing & Debugging
    console.log("-----------------------------");
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + Crystals.blue.value + " | White:" + Crystals.white.value + " |Green: " + Crystals.green.value + " | Red: " + Crystals.red.value);
    console.log("------------------------------");
}


//Respond to the click on the crystals 
var addValues = function(Crystals){
    currentScore = currentScore + Crystals.value;

    // change the HTML to reflect all the changes
    $("#yourScore").html(currentScore);

    //Call the check Win function
    checkWin();

    //Testing and Debugging
    console.log("Your Score:" + currentScore);
}

//Check if the user Won or Lost and Reset the Game
var checkWin = function(){

    //Check if the currentScore is larger than targetScore
    if(currentScore > targetScore) {
        alert("Sorry You Lost!");
        console.log("You Lost!");
        lossCount++;
        $("#lossCount").html(lossCount)

        startGame();
    }

        else if (currentScore == targetScore) {
            alert("Congratulation You Won!");
            console.log("You Won!");
            winCount++;

            $("#winCount").html(winCount)
            startGame();
        }
    
}



//  Main Process
//-------------------------------------------

startGame();

$("#blue").click(function() {
    addValues(Crystals.blue);
});

$("#white").click(function() {
    addValues(Crystals.white);
});

$("#green").click(function() {
    addValues(Crystals.green);
});

$("#red").click(function() {
    addValues(Crystals.red);
});
