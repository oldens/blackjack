import Deck from "./deck.js";
import Player from "./player.js";
import Card from "./card.js";

class BlackJack {
  constructor() {
    console.log("BlackJack constructor");
    this.deck = new Deck("./models/cards54.json");
    this.dealer = new Player("Dealer");
    this.player = new Player("Player");
    document.body.appendChild(this.player.handContainer);
    document.body.appendChild(this.dealer.handContainer);
    this.isFinished = false;
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
    if (this.isFinished) {
      return this.showPleaseReset();
    }
    console.log("Stand");
    while (this.dealer.score < 17) {
      this.dealer.addCard(this.deck.drawCard());
    }
    this.finish();
  }

  finish() {
    const playerScore = this.player.score;
    const dealerScore = this.dealer.score;
    if (playerScore > 21) {
      console.log("Player busts");
    } else if (dealerScore > 21) {
      console.log("Dealer busts");
    } else if (playerScore > dealerScore) {
      console.log("Player wins");
    } else if (playerScore < dealerScore) {
      console.log("Dealer wins");
    } else {
      console.log("It's a tie");
    }
    this.isFinished = true;
  }

  reset() {
    this.deck = new Deck("./models/cards54.json");
    this.dealer.reset();
    this.player.reset();
    this.isFinished = false;
  }
  
  showPleaseReset() {
    alert("Please reset the game");
  }
}

export default BlackJack;
