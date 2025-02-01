import { BlackJack } from './models/black-jack.js';
console.log("start gabmle");
let game = new BlackJack();
game.startGame();
addEventListeners();



function addEventListeners() {
  const hitButton = document.getElementById('hit');
  hitButton.addEventListener('click', () => {
    game.playerHit();
  });

  const standButton = document.getElementById('stand');
  standButton.addEventListener('click', () => {
    game.stand();
  });

  const dealButton = document.getElementById('deal');
  dealButton.addEventListener('click', () => {
    game.deal();
  });
}   