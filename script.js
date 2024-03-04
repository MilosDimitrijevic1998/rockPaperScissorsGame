const choices = ['rock', 'paper', 'scissors']; //niz iz kojeg computer bira preko math.random

const buttons = document.querySelectorAll('.btn'); //selektujem svu dugmad
const message = document.querySelector('.result');

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
      message.textContent = "You Win!"
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
      message.textContent = "You Win!"
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      message.textContent = "You Win!"
    } else {
      message.textContent = "Computer Win!"
    }
  })
});



