let occupiedCells = [];
let score = 0
const getInsideProgressUpdate = document.getElementById("progressUpdate");
getInsideProgressUpdate.innerHTML = "";

const antibac = `<i class="fas fa-pump-soap" id="antibac"></i>`;
const looroll = `<i class="fas fa-toilet-paper" id="looroll"></i>`;
const virus = `<i class="fas fa-virus" id="virus"></i>`;
const facemask = `<i class="fas fa-head-side-mask" id="facemask"></i>`
const blank = ""

const getRandomNumber = () => {
  let randomNumber = Math.floor((Math.random() * 16));
  console.log(randomNumber);
  if (!occupiedCells.includes(randomNumber)) {
    return randomNumber;
  }
  return getRandomNumber();

}
  // Write a function that using the RandomNumber function above, puts 4 virus on the grid in random cells each time and gives that cell as class of virus.
  const createVirusAtRandom = () => { 
  let randomNumber = getRandomNumber();
  occupiedCells.push(randomNumber);
  const cellArray = document.getElementsByClassName("cell");
  console.log(cellArray);
  let cell = cellArray[randomNumber];
  cell.classList.add("virus");
}

// Then repeat the function for 3 facemasks
const createMaskAtRandom = () => {
  let randomNumber = getRandomNumber();
  occupiedCells.push(randomNumber);
  const cellArray = document.getElementsByClassName("cell");
  let cell = cellArray[randomNumber];
  cell.classList.add("facemask");
}
// Then repeat the function for 3 antibacs
const createAntibacAtRandom = () => {
  let randomNumber = getRandomNumber();
  occupiedCells.push(randomNumber);
  const cellArray = document.getElementsByClassName("cell");
  const cell = cellArray[randomNumber];
  cell.classList.add("antibac");
}
// // Then repeat the function for 2 loo rolls
const createLooRollAtRandom = () => {
  let randomNumber = getRandomNumber();
  occupiedCells.push(randomNumber);
  const cellArray = document.getElementsByClassName("cell");
  const cell = cellArray[randomNumber];
  cell.classList.add("looroll");
}

const createBlankAtRandom = () => {
  let randomNumber = getRandomNumber();
  occupiedCells.push(randomNumber);
  const cellArray = document.getElementsByClassName("cell");
  const cell = cellArray[randomNumber];
  cell.classList.add("blank");
}





const clickedClassFunction = (event) => {


  event.target.classList.add("clicked");

  if (event.target.classList.contains("facemask")){ 
    event.target.innerHTML = facemask;
    (score += 5);
    getInsideProgressUpdate.innerHTML = ("Who knows if they make a difference, or if the government approves of them this week, but you've won a face mask!");
    document.getElementById("score").innerHTML = (score);
 
  }
  if (event.target.classList.contains ("antibac")){
    event.target.innerHTML = antibac;
    (score += 10);
    getInsideProgressUpdate.innerHTML = ("Well done, you have won some Antibacterial Hand Sanitiser. Slap it on and hide it in the darkest depths of your bag!");
    document.getElementById("score").innerHTML = (score);
  }
  if (event.target.classList.contains ("looroll")){
    event.target.innerHTML = looroll;
    (score += 15);
    getInsideProgressUpdate.innerHTML = ("Congratulations, you have won a roll of toilet paper!! All I’m saying is make it last!"); 
    document.getElementById("score").innerHTML = (score);
  }

  if (event.target.classList.contains ("virus")){
    event.target.innerHTML = (virus);
    (score = 0);
    getInsideProgressUpdate.innerHTML = ("Achoo!!! Game Over, you caught the virus! Please leave quietly…do not go to your GP. Thank you.");
    document.getElementById("score").innerHTML = (score);
  }
  if (event.target.classList.contains ("blank")){ 
    event.target.innerHTML = blank;
    getInsideProgressUpdate.innerHTML = ("Thanks for the blanks!");
  }

}
  // ADD EVENT LISTENER TO ALL CELLS



  const addEventListeners = () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach (cell => cell.addEventListener ("click", clickedClassFunction));
    };
    addEventListeners();
  
// CLICK EVENT THAT INCREMENTS SCORE IF NEED BE, AND THEN GIVES THE CELL A CLASS OF CLICKED

// const clickEvent = event => {



  // const getInsideScore = document.getElementById("#score");
  // getInsideScore.innerHTML = ""

  let resetGrid = () => {
    score = 0; 
    occupiedCells = [];
    for (let index = 0; index < 3; index++) {
      console.log("viruscalled");
      createVirusAtRandom();
    }
    for (let index = 0; index < 3; index++) {
      console.log("maskcalled");
      createMaskAtRandom();
    }
    for (let index = 0; index < 3; index++) {
        console.log("antibaccalled");
        createAntibacAtRandom();
        }
    for (let index = 0; index < 2; index++) {
          console.log("loorollcalled");
          createLooRollAtRandom();
        }
    for (let index = 0; index < 5; index++) {
          console.log("blank");
          createBlankAtRandom();
        }
    }
    addEventListeners();



const newGame = document.querySelector(".newgame");
newGame.addEventListener("click", resetGrid);

 
resetGrid();



// if score=0 {resetGrid()};


// if virus.clicked = end game. 