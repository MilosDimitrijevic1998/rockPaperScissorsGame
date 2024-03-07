//prebaci u state

//napravi setComputerChoice i setPlayerChoice funkcije tako da ukoliko argument koji prosledjujem nije rock paper ili scissors ona console.loguje molimo vas izaberite rock paper ili scissors i ona se onda returnuje



const buttons = document.querySelectorAll('.btn'); //selektujem svu dugmad
// const message = document.querySelector('.result');


const myState = () => {
  
  //COMPUTER CHOICES
  const computerChoicesArray = ['rock', 'paper', 'scissors']; //niz iz kojeg computer bira preko math.random
  const calculateComputerChoice = () => computerChoicesArray[Math.floor(Math.random() * 3)];

  //PLAYER
  let player = 0;
  const getPlayer = () => player; //return player
  const incrementPlayer = () => player++; //increment player score
  const setPlayer = (score) => player = score; //setting player score
  
  //COMPUTER
  let computer = 0;
  const getComputer = () => computer; //return computer
  const incrementComputer = () => computer++; //increment computer score
  const setComputer = (score) => computer = score; //setting computer score
  
  //PLAYER SCORE
  let playerScore = document.querySelector('.playerScore');
  const getPlayerScore = () => playerScore; //return playerScore
  const incrementPlayerScore = () => playerScore++; //increment playerScore
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
  
  let playerChoice ='';
  let computerChoice = '';
  const setPlayerChoice = (choice) => playerChoice = choice;
  const getPlayerChoice = () => playerChoice;
  const setComputerChoice = (choice) => computerChoice = choice;
  const getComputerChoice = () => computerChoice;
  
  return{getPlayer, incrementPlayer, setPlayer, getComputer, incrementComputer, setComputer, getMessage, addMessage, getPlayerScore, incrementPlayerScore, setPlayerScore, getComputerScore, incrementComputerScore, setComputerScore, setPlayerChoice, getPlayerChoice, setComputerChoice, getComputerChoice, calculateComputerChoice};
}

const gameAPI = rockPaperScissorsCreator();


buttons.forEach(function(button){
  button.addEventListener("click" , function() {
    
    const playerChoice = button.dataset.value;
    gameAPI.setPlayerChoice(playerChoice);
    const computerChoice = calculateComputerChoice();
    gameAPI.setComputerChoice(computerChoice);
    
    // console.log(`You choose ${playerChoice}`);
    // console.log(`Computer choose ${computerChoice}`);
    // console.log('-----------')
    
    if(gameAPI.getPlayerChoice() === gameAPI.getComputerChoice()){
      gameAPI.addMessage('Its Draw!');
      // message.textContent = "Its Draw!"
    } else if (gameAPI.getPlayerChoice() === 'paper' && gameAPI.getComputerChoice() === 'rock') {
      if(gameAPI.getPlayer() < 3) {
        gameAPI.addMessage('You Win!');
        gameAPI.incrementPlayer();
        gameAPI.setPlayerScore(gameAPI.getPlayer());
        // message.textContent = "You Win!";
        // player++;
        // playerScore.textContent = player;
      } 
    } else if (gameAPI.getPlayerChoice() === 'rock' && gameAPI.getComputerChoice() === 'scissors') {
      if(gameAPI.getPlayer() < 3) {
        gameAPI.addMessage("You Win!");
        gameAPI.incrementPlayer();
        gameAPI.setPlayerScore(gameAPI.getPlayer());
        // message.textContent = "You Win!";
        // player++;
        // playerScore.textContent = player;
      }
    } else if (gameAPI.getPlayerChoice() === 'scissors' && gameAPI.getComputerChoice() === 'paper') {
      if(gameAPI.getPlayer() < 3) {
        gameAPI.addMessage("You Win!");
        gameAPI.incrementPlayer();
        gameAPI.setPlayerScore(gameAPI.getPlayer());
        // message.textContent = "You Win!";
        // player++;
        // playerScore.textContent = player;
      }
    } else {
      if(gameAPI.getComputer() < 3){
        gameAPI.addMessage("Computer Win!");
        gameAPI.incrementComputer();
        gameAPI.setComputerScore(gameAPI.getComputer());
        // message.textContent = "Computer Win!"
        // computer++;
        // computerScore.textContent = computer;
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

document.querySelector('.playAgainButotn').addEventListener('click' , function(){
  document.querySelector('.playAgainOverlay').style.display = "none";
  gameAPI.getPlayer() = 0;
  gameAPI.setPlayerScore() = gameAPI.getPlayer();
  gameAPI.getComputer() = 0;
  gameAPI.setComputerScore() = gameAPI.getComputer();
  // computerScore.textContent = computer;
  // playerScore.textContent = player;
})


























//napravi funkciju monsterCreator, ona treba da ima od state health(5) i speed(10). 
//od funkcija treba da ima monsterAttack i monsterFly i heal. 
//kad pozovem funkciju monsterAttack helt se smanjuje za 1, ako su helti dodju do 1 console.log(previse si ranjen ne mozes da napadas) i helti se ne smanjuju vise. 
//kada pozovem funkciju heal helti se vracaju na 5.
//kad pozovem funkciju monsterFly brzina se povecava za 5;
//nakon svakog pozivanja funkcije console.log trenutne helte i brzinu 