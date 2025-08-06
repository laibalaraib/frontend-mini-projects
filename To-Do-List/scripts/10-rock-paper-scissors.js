let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();
/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.'
    } else if (computerMove === 'paper') {
      result = 'You Win.'
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win.'
    } else if (computerMove === 'paper') {
      result = 'Tie.'
    } else if (computerMove === 'scissors') {
      result = 'You Lose.';
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.'
    } else if (computerMove === 'paper') {
      result = 'You Lose.'
    } else if (computerMove === 'scissors') {
      result = 'You Win.';
    }
  }

  if (result === 'You Win.') {
    score.wins += 1;
    launchConfetti();
  } else if (result === 'You Lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML =
    `Your Move 
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer Move`;

}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

//use funaction names with verb / action 
//funtion creats a scope
//easier to update in future

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';

  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';

  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';

  }

  // return variable is preferred over global variable bcz scope inflect namimg conflict. (keep things inside scope is best)
  //Return Statement : lets use get a value out of a funtion

  return computerMove;
  // value/math/etc
  //return: lets us get a value out of the function and is end of the code, not gonna return anything after this statement.  

}

function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }  // You can tweak this for where the confetti starts
  });
}