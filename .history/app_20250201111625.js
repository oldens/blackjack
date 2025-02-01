import { BlackJack } from "./models/black-jack.js";

console.log("start gamble");

const game = new BlackJack();

const dealBtn = document.getElementById("deal");
const hitBtn = document.getElementById("hit");
const standBtn = document.getElementById("stand");

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
