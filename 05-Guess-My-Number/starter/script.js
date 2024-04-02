'use strict';
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Pocni pogadati';
document.querySelector('.guess').value = 2;
*/
let randomNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('👎 No number');
  } else if (guess == randomNumber) {
    displayMessage('🎉 Congrats You are right!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(
        guess > randomNumber
          ? '📈 Number too high'
          : '📉 Number too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost!');
      document.querySelector('.score').textContent = '0';
    }
  }

  /*else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📈 Number too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost!';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📉 Number too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost!';
      document.querySelector('.score').textContent = '0';
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
