import BlackJack from "./models/black-jack.js";

console.log("start gamble");

const resultContainer = document.getElementById("result_container");
const gameArea = document.getElementById("game_area");

const game = new BlackJack(resultContainer, gameArea);
game.startGame();
