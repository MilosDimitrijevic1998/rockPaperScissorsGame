const choices = ['rock', 'paper', 'scissors']; //niz iz kojeg computer bira preko math.random

const buttons = document.querySelectorAll('.btn'); //selektujem svu dugmad
const message = document.querySelector('.result');
let player = 0;
let playerScore = document.querySelector('.playerScore');
let computer = 0;
let computerScore = document.querySelector('.computerScore');

buttons.forEach(function(button){
  button.addEventListener("click" , function() {
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const playerChoice = button.dataset.value;
    console.log(`You choose ${playerChoice}`);
    console.log(`Computer choose ${computerChoice}`);
    console.log('-----------')

    if(playerChoice === computerChoice){
      message.textContent = "Its Draw!"
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
      if(player < 3) {
        message.textContent = "You Win!";
        player++;
        playerScore.textContent = player;
      }
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
      if(player < 3) {
        message.textContent = "You Win!";
        player++;
        playerScore.textContent = player;
      }
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      if(player < 3) {
        message.textContent = "You Win!";
        player++;
        playerScore.textContent = player;
      }
    } else {
      if(computer < 3){
        message.textContent = "Computer Win!"
        computer++;
        computerScore.textContent = computer;
      }
    }
  })
});



