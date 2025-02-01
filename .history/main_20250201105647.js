import { BlackJack } from './BlackJack';
let game = new BlackJack();
game.startGame();
game.hit();



function addEventListeners() {
  const hitButton = document.getElementById('hit');
  hitButton.addEventListener('click', () => {
    game.hit();
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