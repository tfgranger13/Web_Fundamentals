var theDojo = [[1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
[3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
[5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
[2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
[6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
[0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
[0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
[2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
[5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
[9, 2, 2, 2, 0, 7, 0, 1, 1, 0]];
var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for (var i = 0; i < theDojo.length; i++) {
    for (var j = 0; j < theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  // create start button
  result += `<button class="start" onclick="randomDojo()">Click here to start the game!</button>`;
  return result;
}

function randomDojo(){
  // set all the values to 0
  for (var i = 0; i < theDojo.length; i++) {
    for (var j = 0; j < theDojo[i].length; j++) {
      theDojo[i][j]=0;
    }
  }
  // create sum counter
  var sumCounter = 0;
  // while there are less than 10 numbers, randomly place a number
  while (sumCounter!=10){
    // select a random element
    var checkNinjasI = Math.floor(Math.random()*10);
    var checkNinjasJ = Math.floor(Math.random()*10);
    // check if the value is not 1
    if (theDojo[checkNinjasI][checkNinjasJ]!=1){
      // set the value to 1 if it is not
      theDojo[checkNinjasI][checkNinjasJ]=1;
      sumCounter++;
    }
  }
  alert("The board has been randomized. Good luck!");
}


// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
  var ninjaCount = 0;
  // check top left corner
  if (i == 0 && j == 0) {
    // below
    if (theDojo[i + 1][j] != 0) {
      ninjaCount += theDojo[i + 1][j];
    }
    // right
    if (theDojo[i][j + 1] != 0) {
      ninjaCount += theDojo[i][j + 1];
    }
    // bottom right
    if (theDojo[i + 1][j + 1] != 0) {
      ninjaCount += theDojo[i + 1][j + 1];
    }
  }

  // top left corner
  else if (i == 0 && j == 9) {
    // left
    if (theDojo[i][j - 1] != 0) {
      ninjaCount += theDojo[i][j - 1];
    }
    // bottom left
    if (theDojo[i + 1][j - 1] != 0) {
      ninjaCount += theDojo[i + 1][j - 1];
    }
    // below
    if (theDojo[i + 1][j] != 0) {
      ninjaCount += theDojo[i + 1][j];
    }
  }

  // bottom right corner
  else if (i == 9 && j == 9) {
    if (theDojo[i - 1][j] != 0) {
      ninjaCount += theDojo[i - 1][j];
    }
    if (theDojo[i - 1][j - 1] != 0) {
      ninjaCount += theDojo[i - 1][j - 1];
    }
    if (theDojo[i][j - 1] != 0) {
      ninjaCount += theDojo[i][j - 1];
    }
  }

  // bottom left corner
  else if (i == 9 && j == 0) {
    // above
    if (theDojo[i - 1][j] != 0) {
      ninjaCount += theDojo[i - 1][j];
    }
    // top right
    if (theDojo[i - 1][j + 1] != 0) {
      ninjaCount += theDojo[i - 1][j + 1];
    }
    // right
    if (theDojo[i][j + 1] != 0) {
      ninjaCount += theDojo[i][j + 1];
    }
  }

  // left between corners
  else if (j == 0 && (i != 0 || i != 9)) {
    // above
    if (theDojo[i - 1][j] != 0) {
      ninjaCount += theDojo[i - 1][j];
    }
    // top right
    if (theDojo[i - 1][j + 1] != 0) {
      ninjaCount += theDojo[i - 1][j + 1];
    }
    // right
    if (theDojo[i][j + 1] != 0) {
      ninjaCount += theDojo[i][j + 1];
    }
    // below
    if (theDojo[i + 1][j] != 0) {
      ninjaCount += theDojo[i + 1][j];
    }
    // bottom right
    if (theDojo[i + 1][j + 1] != 0) {
      ninjaCount += theDojo[i + 1][j + 1];
    }
  }

  // right between corners
  else if (j == 9 && (i != 0 || i != 9)) {
    // below
    if (theDojo[i + 1][j] != 0) {
      ninjaCount += theDojo[i + 1][j];
    }
    // above
    if (theDojo[i - 1][j] != 0) {
      ninjaCount += theDojo[i - 1][j];
    }
    // left
    if (theDojo[i][j - 1] != 0) {
      ninjaCount += theDojo[i][j - 1];
    }
    // top left
    if (theDojo[i - 1][j - 1] != 0) {
      ninjaCount += theDojo[i - 1][j - 1];
    }
    // bottom left
    if (theDojo[i + 1][j - 1] != 0) {
      ninjaCount += theDojo[i + 1][j - 1];
    }
  }

  // top between corners
  else if (i == 0 && (j != 0 || j != 9)) {
    // below
    if (theDojo[i + 1][j] != 0) {
      ninjaCount += theDojo[i + 1][j];
    }
    // left
    if (theDojo[i][j - 1] != 0) {
      ninjaCount += theDojo[i][j - 1];
    }
    // bottom left
    if (theDojo[i + 1][j - 1] != 0) {
      ninjaCount += theDojo[i + 1][j - 1];
    }
    // right
    if (theDojo[i][j + 1] != 0) {
      ninjaCount += theDojo[i][j + 1];
    }
    // bottom right
    if (theDojo[i + 1][j + 1] != 0) {
      ninjaCount += theDojo[i + 1][j + 1];
    }
  }

  // bottom between corners
  else if (i == 9 && (j != 0 || j != 9)) {
    // above
    if (theDojo[i - 1][j] != 0) {
      ninjaCount += theDojo[i - 1][j];
    }
    // right
    if (theDojo[i][j + 1] != 0) {
      ninjaCount += theDojo[i][j + 1];
    }
    // left
    if (theDojo[i][j - 1] != 0) {
      ninjaCount += theDojo[i][j - 1];
    }
    // top left
    if (theDojo[i - 1][j - 1] != 0) {
      ninjaCount += theDojo[i - 1][j - 1];
    }
    // top right
    if (theDojo[i - 1][j + 1] != 0) {
      ninjaCount += theDojo[i - 1][j + 1];
    }
  }

  else {
    // below
    if (theDojo[i + 1][j] != 0) {
      ninjaCount += theDojo[i + 1][j];
    }
    // above
    if (theDojo[i - 1][j] != 0) {
      ninjaCount += theDojo[i - 1][j];
    }
    // right
    if (theDojo[i][j + 1] != 0) {
      ninjaCount += theDojo[i][j + 1];
    }
    // left
    if (theDojo[i][j - 1] != 0) {
      ninjaCount += theDojo[i][j - 1];
    }
    // bottom right
    if (theDojo[i + 1][j + 1] != 0) {
      ninjaCount += theDojo[i + 1][j + 1];
    }
    // top left
    if (theDojo[i - 1][j - 1] != 0) {
      ninjaCount += theDojo[i - 1][j - 1];
    }
    // top right
    if (theDojo[i - 1][j + 1] != 0) {
      ninjaCount += theDojo[i - 1][j + 1];
    }
    // bottom left
    if (theDojo[i + 1][j - 1] != 0) {
      ninjaCount += theDojo[i + 1][j - 1];
    }
  }
  console.log({ i, j });
  if (theDojo[i][j]==1){
    dojoDiv.innerHTML = `<button onclick="location.reload()">Restart</button>`
  }
  element.textContent = ninjaCount;
}


// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);