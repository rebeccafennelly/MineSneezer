const occupiedCells = [];
let score = 0

//---------- write a rest function called resetGrid()----------

// const resetGrid = () => {
// //   
const resetGrid = () => score = 0;
// AND DO THE WHOLE GET RANDOM NUMBER FUNCTION TO THEN DO CREATEVIRUSATRANDOM ETC ALL OVER AGAIN. 

const newGame = document.querySelector(".newgame");
newGame.addEventListener("click", resetGrid);
//   }




  const facemask = `<i class="fas fa-head-side-mask" id="facemask"></i>`;
  const antibac = `<i class="fas fa-pump-soap" id="antibac"></i>`;
  const looroll = `<i class="fas fa-toilet-paper" id="looroll"></i>`;
  const virus = `<i class="fas fa-virus" id="virus"></i>`;


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
for (let index = 0; index < 4; index++) {
  console.log("viruscalled");
  createVirusAtRandom();
}

// Then repeat the function for 3 facemasks
const createMaskAtRandom = () => {
  let randomNumber = getRandomNumber();
  occupiedCells.push(randomNumber);
  const cellArray = document.getElementsByClassName("cell");
  let cell = cellArray[randomNumber];
  cell.classList.add("facemask");
}
for (let index = 0; index < 3; index++) {
  console.log("maskcalled");
  createMaskAtRandom();
  
}
// Then repeat the function for 3 antibacs
const createAntibacAtRandom = () => {
  let randomNumber = getRandomNumber();
  occupiedCells.push(randomNumber);
  const cellArray = document.getElementsByClassName("cell");
  const cell = cellArray[randomNumber];
  cell.classList.add("antibac");
}
for (let index = 0; index < 3; index++) {
  console.log("antibaccalled");
  createAntibacAtRandom();
  }
// // Then repeat the function for 2 loo rolls
const createLooRollAtRandom = () => {
  let randomNumber = getRandomNumber();
  occupiedCells.push(randomNumber);
  const cellArray = document.getElementsByClassName("cell");
  const cell = cellArray[randomNumber];
  cell.classList.add("looroll");
}
for (let index = 0; index < 2; index++) {
  console.log("loorollcalled");
  createLooRollAtRandom();
}

const createBlankAtRandom = () => {
  let randomNumber = getRandomNumber();
  occupiedCells.push(randomNumber);
  const cellArray = document.getElementsByClassName("cell");
  const cell = cellArray[randomNumber];
  cell.classList.add("blank");
}
for (let index = 0; index < 4; index++) {
  console.log("blank");
  createBlankAtRandom();
}











// CREATE CURRENTSCORE WHICH TALLIES UP POINTS AND ADDS ONTO 





const clickedClassFunction = (event) => {

  event.target.classList.add("clicked");

  if (event.target.classList.contains("facemask")){ 
    event.target.innerHTML = facemask;
    document.getElementById("score").innerHTML = (score ="Score = 5");
    // (currentScore += 5);

// “Who knows if they make a difference, or if the government approves of them this week, but you've won a face mask!”
}
//   if (event.target.classList.contains ("antibac")){
//     event.target.innerHTML = antibac;
//   // (currentScore += 10);

//   // “Well done, you've won some Antibacterial Gel. Slap it on and then hide it in your bag.”
// }
//   if (event.target.classList.contains ("looroll")){
//     event.target.innerHTML = looroll;
//     // (score += 15);

//   //  “Congratulations, you've won a roll of toilet paper!!  All I’m saying is make it last.”
// }    
//   if (event.target.classList.contains ("virus")){
//     event.target.innerHTML = virus;
//       // (score = 0);
      
//       //  “Achoo!!! Game Over, you caught the virus! Please leave quietly…do not go to your GP. Thank you.”
// }
//   if (event.target.classList.contains ("blank")){ 
//     event.target.innerHTML = blank;
//   }



}
  // ADD EVENT LISTENER TO ALL CELLS



  const addEventListeners = () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach (cell => cell.addEventListener ("click", clickedClassFunction));
    };
    addEventListeners();
    
    


// CLICK EVENT THAT INCREMENTS SCORE IF NEED BE, AND THEN GIVES THE CELL A CLASS OF CLICKED

// const clickEvent = event => {



  


 

