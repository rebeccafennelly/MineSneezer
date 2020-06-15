let occupiedCells = [];
let score = 0
const getInsideProgressUpdate = document.getElementById("progressUpdate");
getInsideProgressUpdate.innerHTML = "";
const cellArray = document.getElementsByClassName("cell");

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
  
  const createAtRandom = (type) => { 
  let randomNumber = getRandomNumber();
  occupiedCells.push(randomNumber);
  // const cellArray = document.getElementsByClassName("cell");
  console.log(cellArray);
  let cell = cellArray[randomNumber];
  cell.classList.add(type);
}


endOfGame = () => {
  const endGamePopUp = document.querySelector(".endgamepopup");
  endGamePopUp.classList.add("over");
  resetGrid();
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
   document.getElementById("score").innerHTML = (score);
  //  cell.innerHTML = ""
    endOfGame();

}
  
  if (event.target.classList.contains ("blank")){ 
    event.target.innerHTML = blank;
    getInsideProgressUpdate.innerHTML = ("Blank! Sitting duck...");
  }

}


  const addEventListeners = () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach (cell => cell.addEventListener ("click", clickedClassFunction));
    };
    addEventListeners();
  
    // addEventListeners();



  const resetGrid = () => {


    // if (event.target.classList.contains("clicked")){
    //   cell.removeEventListener("click");
    //  }

      [...cellArray].forEach((cell) => {
      cell.classList.remove("facemask", "antibac", "looroll", "virus", "blank", "clicked");
      })
      score = 0; 
      occupiedCells = [];

    for (let index = 0; index < 3; index++) {

      createAtRandom("virus");
      createAtRandom("facemask");
      createAtRandom("antibac");
    }
    for (let index = 0; index < 2; index++) {
        createAtRandom("looroll");
        }
    for (let index = 0; index < 5; index++) {
          createAtRandom("blank");
        }
    }
  



const newGame = document.querySelector(".newgame");
newGame.addEventListener("click", resetGrid);


resetGrid();



 



//  CLICK A virus, POP UP SAYS YOURE DEAD, REMOVE CLASSES ON CELLS APART FROM CLASS OF CELL, THEN REDISTRUBUTE.
// endOfGame = () => {
//   const endGamePopUp = document.querySelector(".endofgamepopup");
//  endGamePopUp.innerHTML = "Achoo!!! Game Over, you caught the virus! Please leave quietly…do not pass go, do not collect £200 and do not go to your GP...or <a>click here</a> to reset the grid."
//   cellArray.forEach((cell) => {
//       cell.classList.remove("facemask", "antibac", "looroll", "virus", "blank", "clicked");
//       })
//       score = 0; 
//       occupiedCells = [];
// }    



const clickHere = document.querySelector(".clickhere");
clickHere.addEventListener("click", resetGrid);
endGamePopUp.classList.remove("over");


