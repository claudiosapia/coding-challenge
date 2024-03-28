// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

// Your code

const players = data.getPlayers();

function logPlayersDetails() {
  console.log("TEST 1:");
  //loop through player obj
  for (let i = 0; i < players.length; i++) {
    //log details
    console.log(`PLAYER ${i + 1}`);
    console.log(`NAME: ${players[i].name}`);
    console.log(`LASTNAME: ${players[i].lastname}`);
    console.log(`POSITION: ${players[i].position}`);
  }
  
}

//  execute function
logPlayersDetails();

/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code

//init array
let playerNamesArray = [];

function logPlayersByName() {
  //map data and push names in array
  players.map((player) => {
    playerNamesArray.push(player.name);
  });

  // arr.sort method to sort elements in descending order
  playerNamesArray.sort((a, b) => b.length - a.length);

  //log
  console.log(`TEST 02: ${playerNamesArray}`);
}

//execute function
logPlayersByName();

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, each of them has a 0.11 scoringChance, the total number of goals will be 1.1 average
 * Output example -> Goals per match: 2.19
 */

// Your code

//init array to store tot chance value
let totChance = [];

//function to calculate avg of goals
function calcAverageGoals() {
  //init sum var
  let sum = 0;

  //loop through players obj and sum all scoringChance values adding to accumulator
  players.forEach((player) => {
    sum += Number(player.scoringChance);
  });

  // calc average dividing sum by 100 matches
  const averageGoals = sum / 100;

  //log
  console.log(` TEST 03: ${averageGoals}`);
}

calcAverageGoals();

/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code

//init function that takes a parameter chosenPlayer to display the chosen player position
const findPlayerPosition = function (chosenPlayer) {
  //.find function to find element with name == to chosenPlayer
  const selectedPlayer = players.find((player) => player.name == chosenPlayer);

  //get player position
  const playerPosition = selectedPlayer.position;

  //log
  console.log(`TEST 04: ${playerPosition}`);
};

//execute function with player name as arg
 findPlayerPosition("Tammy");

/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 

* Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance. 
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code

let teamA = [];
let teamB = [];

const getMatchScore = function () {
  //create a copy of the array
  const team = players;

  //get half of length of team
  const halfTeam = Math.floor(team.length / 2);

  //loop through team elements
  for (let i = team.length; i > team.length - 1; i--) {

    //generate random index multiplying a random generated num within range of team length
    let randomIndex = Math.floor(Math.random() * team.length);

    //remove player from team array and store it in randomPlayer 
    // starting at the randomIndex removing 1 element from that position.
    const randomPlayer = team.splice(randomIndex, 1)[0]; 

    // check if the number of elements in teamA arr is less than 5  
    // and if randomPlayer generated is not already in teamA or teamB
    if (
      teamA.length < halfTeam &&
      !teamA.includes(randomPlayer) &&
      !teamB.includes(randomPlayer)
    ) {
      //add random player to array
      teamA.push(randomPlayer);
      //same for team B
    } else if (
      teamB.length < halfTeam &&
      !teamA.includes(randomPlayer) &&
      !teamB.includes(randomPlayer)
    ) {
      teamB.push(randomPlayer);
    }
  }

  //init sum vars
  let sumA = 0;
  let sumB = 0;

  //loop through teamA and teamB and sum all scoringChance values adding to accumulators
  teamA.forEach((player) => {
    sumA += Number(player.scoringChance);
  });

  teamB.forEach((player) => {
    sumB += Number(player.scoringChance);
  });

  // calc average dividing accumulators storing scoring chance values dividing by 100 matches to get value of 1 match
  //rounding to closest integer
  const averageGoalsTeamA = Math.round(sumA / 100);
  const averageGoalsTeamB = Math.round(sumB / 100);

  //log match score
  console.log(
    `TEST 5: The Match score is: Team A: ${averageGoalsTeamA}.  Team B: ${averageGoalsTeamB}`
  );
};

getMatchScore();
