import BlackJack from "./models/black-jack.js";

console.log("start gamble");

const dealBtn = document.getElementById("deal");
const hitBtn = document.getElementById("hit");
const standBtn = document.getElementById("stand");
const resultContainer = document.getElementById("result_container");
const gameArea = document.getElementById("game_area");

const game = new BlackJack(resultContainer);
game.startGame();


dealBtn.addEventListener("click", () => {
  game.reset();
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
