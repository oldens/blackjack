import Deck from "./deck.js";
import Player from "./player.js";
import Card from "./card.js";

class BlackJack {
  constructor(resultContainer, gameArea) {
    console.log("BlackJack constructor");
    this.deck = new Deck("./models/cards54.json");
    this.dealer = new Player("Dealer");
    this.player = new Player("Player");
    gameArea.appendChild(this.player.handContainer);
    gameArea.appendChild(this.dealer.handContainer);
    this.isFinished = false;
    this.resultContainer = resultContainer;
  }

  startGame() {
    this.deck.shuffle();
  }

  hit() {
    if (this.isFinished) {
      return this.showPleaseReset();
    }
    this.player.addCard(this.deck.drawCard());
    console.log("Player Score:", this.player.score);
    if (this.player.score >= 21) {
      this.stand();
    }
  }

  stand() {
 
    while (this.dealer.score < 17) {
      this.dealer.addCard(this.deck.drawCard());
    }
    this.finish();
  }

  finish() {
    const playerScore = this.player.score;
    const dealerScore = this.dealer.score;
    let message = "";

    switch (true) {
      case (playerScore > 21):
        message = "Player busts";
        break;
      case (dealerScore > 21):
        message = "Dealer busts";
        break;
      case (playerScore > dealerScore):
        message = "Player wins";
        break;
      case (playerScore < dealerScore):
        message = "Dealer wins";
        break;
      default:
        message = "It's a tie";
        break;
    }
    this.resultContainer.innerHTML = message;
    console.log(message);
    this.isFinished = true;
  }

  reset() {
    this.deck = new Deck("./models/cards54.json");
    this.dealer.reset();
    this.player.reset();
    this.isFinished = false;
    this.resultContainer.innerHTML = "";
  }
  
  showPleaseReset() {
    alert("Please reset the game");
  }
}

export default BlackJack;
