const choices = ['rock', 'paper', 'scissors']; //niz iz kojeg computer bira preko math.random

const buttons = document.querySelectorAll('.btn'); //selektujem svu dugmad

buttons.forEach(function(button){
  button.addEventListener("click" , function() {
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const playerChoice = button.dataset.value;
    console.log(`You choose ${playerChoice}`);
    console.log(`Computer choose ${computerChoice}`);
    console.log('-----------')

    if(playerChoice === computerChoice){
      console.log('Its Draw!');
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
      console.log('You win');
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
      console.log('You win');
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      console.log('You win');
    } else {
      console.log('Computer win');
    }
    // else if (playerChoice === 'rock' && computerChoice === 'scissors' ? console.log('You win!') : console.log('Computer win!')){
    // }
    // else if (playerChoice === 'paper' && computerChoice === 'rock' ? console.log('You win!') : console.log('Computer win!')){
    // }
    // else if (playerChoice === 'scissors' && computerChoice === 'paper' ? console.log('You win!') : console.log('Computer win!')){
    // }
  })
});



