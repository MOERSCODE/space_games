// ### Space Battle

//Reminder on how to set up js in Chrome console
// Execute Javascript in a web page. Put your javascript in a .js file as normal. Reference the file inside a script tag inside the `` tag of your html file ```javascript```
// "Must have at least 5 commits not including initial commit 
// Use math.random from 0-10 math.random will be eused to generate the number. Testing ship accuracy, 
// Our ship has an accuracy of 0.7 the alien ship will be generated with math.random to see if the player hits." -->
// #### Setting up our project directory
// 1. Create a project directory `$ mkdir yourname-mid-mod-1`
// 2. `$ cd yourname-mid-mod-1`
// 3. `$ touch index.html app.js` 
// #### Guide to get started 
// ##### 1 Player game 
// - USS Schwarzenegger (User)
//   - Attacks first 
//   - Is able to retreat 
//   - Hull: 20
//   - Firepower: 5
//   - Accuracy: 7
// - 6 Alien ships (Computer)
//   - Hull: 3-6
//   - Firepower: 2-4
//   - Accuracy: .6 - .8
//   - <b>Weakness</b> They attack one at a time 
//   - <b>Hull (AKA hitpoints):</b>  If hull reaches 0 or less, the ship is destroyed
//   - <b>Firepower:</b> Amount of damage done to the hull of the target with a successful hit 
//   - <b>Accuracy: </b> is the chance between 0-1 that the ship will hit its target
//       - Everytime the ship will attack, calculate the chance that the damage will hit the opposing ship using `Math.random` 
//       - If the ships accuracy is greater than `0.8`than the attack is missed
//       - If the ships accuracy is less than or equal to `0.8` the attack will be successful 
// #### Functionality pseudocode
// - Welcome to the game 
// - User starts the game
// - User can click attack! 
// - If alien ship isn't attacked then it is the alien's turn
// - If the user survives the alien attack then User can `attack` or `retreat`
// - If user retreats the game is over
// This is the beginning of the Space_games javaScript code
// use "result" as user input

// Inputting the math.random function
function randomInt(Max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  console.log(randomInt(2));
  // the integer out put is output: 0, 1
  
  console.log(Math.random());
  // the integer out put is between between 0 and 1

  

console.log("Welcome to the very first Space Game V.1 COPYRIGHT 2020!!!")

var enemyShip = newShip (enemyShipName[enemyName()], enemyShip, enemyFp, enemyACC)

// "Decision" allows you to choose to strike or to retreat. 

let response;

const commenceGame = () => {
   // Send a updat message to player
warning("On your mission home USS Schwarzenegger, your have encountered the enemy and must attack in order to return home safely")
warning(`${enemyShip.name} is near you. What will you do?`)
response = prompt(`Your ship is ${ship.status} there are still ${enemyShipName.length} lurking, would you like to [b]attle or [h]ide`);

// This is the decision to battle or hide yourself in the game. 
yourJourneyContinues();
}

const yourJourneyContinues = () => {}

while (repsonse === "b"){
    ussSchwartzenegger.battle(enemyShip,  ussSchwartzenegger);

    if (playerlose === true){ enemyShip.battle(ussSchwartzenegger, enemyShip);
    }
}
if (response === "a" || response === undefined ||response === null) {

    let end = prompt(`Is hiding your final answer? How can you honestly call yourself a warrior?`);

    if (end === true){

        terminateGame(); //This will end the game
    }

    if (response === "c"
}
}


