import { BlackJack } from './black-jack.js';

// Ensure the DOM is fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", () => {
  console.log("start gamble");

  const game = new BlackJack();

  const dealBtn = document.getElementById("deal");
  const hitBtn = document.getElementById("hit");
  const standBtn = document.getElementById("stand");

  // Check if the buttons exist
  if (!dealBtn || !hitBtn || !standBtn) {
    console.error("One or more game control buttons are missing.");
    return;
  }

  // Event listeners for game actions
  dealBtn.addEventListener("click", () => {
    game.startGame();
    console.log("Deal button clicked");
  });
  
  hitBtn.addEventListener("click", () => {
    if (typeof game.hit === "function") {
      game.hit();
      console.log("Hit button clicked");
    } else {
      console.warn("Hit method is not implemented in BlackJack.");
    }
  });
  
  standBtn.addEventListener("click", () => {
    if (typeof game.stand === "function") {
      game.stand();
      console.log("Stand button clicked");
    } else {
      console.warn("Stand method is not implemented in BlackJack.");
    }
  });
});