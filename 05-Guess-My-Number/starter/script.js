'use strict';
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Pocni pogadati';
document.querySelector('.guess').value = 2;
*/
const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '👎 No number';
  } else if (guess == randomNumber) {
    document.querySelector('.message').textContent =
      '🎉 Congrats You are right!';
  } else if (guess > randomNumber) {
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
  }
});
