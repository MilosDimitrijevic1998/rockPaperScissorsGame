const buttons = document.querySelectorAll('.btn'); 

//--------------------> MAIN STATE <--------------------
const mainState = () => {
  
  //COMPUTER CHOICES ARRAY
  const computerChoicesArray = ['rock', 'paper', 'scissors']; 
  const getComputerArray = () => computerChoicesArray;
  const calculateComputerChoice = () => computerChoicesArray[Math.floor(Math.random() * 3)];

  //PLAYER COUNTER
  let player = 0;
  const getPlayer = () => player; 
  const incrementPlayer = () => player++; 
  const setPlayer = (score) => player = score; 
  
  //COMPUTER COUNTER
  let computer = 0;
  const getComputer = () => computer; 
  const incrementComputer = () => computer++; 
  const setComputer = (score) => computer = score; 
  
  //PLAYER CHOICE
  let playerChoice ='';
  const getPlayerChoice = () => playerChoice;
  const setPlayerChoice = (choice) => {
    if (choice !== 'rock' || 'paper' || 'scissors') {
      playerChoice = choice;
    } else {
      console.log('Please choose between ROCK, PAPER OR SCISSORS!');
    }
  };

  //COMPUTER CHOICE
  let computerChoice = '';
  const getComputerChoice = () => computerChoice;
  const setComputerChoice = (choice) => {
    if (choice === 'rock' || 'paper' || 'scissors') {
      computerChoice = choice;
    } else {
      console.log('Please choose between ROCK, PAPER OR SCISSORS!');
    }
  };
  
  return{getPlayer, incrementPlayer, setPlayer, getComputer, incrementComputer, setComputer, setPlayerChoice, getPlayerChoice, setComputerChoice, getComputerChoice, calculateComputerChoice, getComputerArray};
}






//--------------------> UI STATE <--------------------
const uiState = () => {

    //PLAYER SCORE
    let playerScore = document.querySelector('.playerScore');
    const getPlayerScore = () => playerScore;
    const incrementPlayerScore = () => playerScore++;
    const setPlayerScore = (score) => playerScore.textContent = score;
    
    //COMPUTER SCORE
    let computerScore = document.querySelector('.computerScore');
    const getComputerScore = () => computerScore;
    const incrementComputerScore = () => computerScore++;
    const setComputerScore = (score) => computerScore.textContent = score;
    
    //MESSAGE
    const message = document.querySelector('.result');
    const getMessage = () => message;
    const addMessage = (addMesage) => message.textContent = addMesage;


    return{getPlayerScore, incrementPlayerScore, setPlayerScore, getComputerScore, incrementComputerScore, setComputerScore, getMessage, addMessage}
}


//--------------------> SAVING STATES INTO CONST <--------------------
const gameAPI = mainState();
const uiAPI = uiState();



//--------------------> PLAY GAME <--------------------
buttons.forEach(function(button){
  button.addEventListener("click" , function() {
    
    const playerChoice = button.dataset.value;
    gameAPI.setPlayerChoice(playerChoice);
    console.log(playerChoice);
    const computerChoice = gameAPI.calculateComputerChoice();
    gameAPI.setComputerChoice(computerChoice);
    
    
    if(gameAPI.getPlayerChoice() === gameAPI.getComputerChoice()){
      uiAPI.addMessage('Its Draw!');

    } else if (gameAPI.getPlayerChoice() === 'paper' && gameAPI.getComputerChoice() === 'rock') {
      if(gameAPI.getPlayer() < 3) {
        uiAPI.addMessage('You Win!');
        gameAPI.incrementPlayer();
        uiAPI.setPlayerScore(gameAPI.getPlayer());
      } 

    } else if (gameAPI.getPlayerChoice() === 'rock' && gameAPI.getComputerChoice() === 'scissors') {
      if(gameAPI.getPlayer() < 3) {
        uiAPI.addMessage("You Win!");
        gameAPI.incrementPlayer();
        uiAPI.setPlayerScore(gameAPI.getPlayer());
      }

    } else if (gameAPI.getPlayerChoice() === 'scissors' && gameAPI.getComputerChoice() === 'paper') {
      if(gameAPI.getPlayer() < 3) {
        uiAPI.addMessage("You Win!");
        gameAPI.incrementPlayer();
        uiAPI.setPlayerScore(gameAPI.getPlayer());
      }

    } else {
      if(gameAPI.getComputer() < 3){
        uiAPI.addMessage("Computer Win!");
        gameAPI.incrementComputer();
        uiAPI.setComputerScore(gameAPI.getComputer());
      }
    }
    
    if (gameAPI.getPlayer() === 3) {
      document.querySelector('.playAgainOverlay').style.display = "flex";
      document.querySelector('.playAgainMessage').textContent = "You Won!";
    } else if (gameAPI.getComputer() === 3) {
      document.querySelector('.playAgainOverlay').style.display = "flex";
      document.querySelector('.playAgainMessage').textContent = "Computer Won!";
    }
  })
});



//--------------------> RESTART GAME <--------------------
document.querySelector('.playAgainButotn').addEventListener('click' , function(){
  document.querySelector('.playAgainOverlay').style.display = "none";
  gameAPI.setPlayer(0);
  uiAPI.setPlayerScore(gameAPI.getPlayer());
  gameAPI.setComputer(0);
  uiAPI.setComputerScore(gameAPI.getComputer());
  uiAPI.addMessage('');
})


























//napravi funkciju monsterCreator, ona treba da ima od state health(5) i speed(10). 
//od funkcija treba da ima monsterAttack i monsterFly i heal. 
//kad pozovem funkciju monsterAttack helt se smanjuje za 1, ako su helti dodju do 1 console.log(previse si ranjen ne mozes da napadas) i helti se ne smanjuju vise. 
//kada pozovem funkciju heal helti se vracaju na 5.
//kad pozovem funkciju monsterFly brzina se povecava za 5;
//nakon svakog pozivanja funkcije console.log trenutne helte i brzinu 