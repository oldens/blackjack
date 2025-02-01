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
    this.isfinished = false;
  }

  startGame() {
    this.deck.shuffle();
  }

  hit() {
    if (this.isfinished) {
        this.showPleaseReset();
      }
    this.player.addCard(this.deck.drawCard());
    console.log(this.player.score);
    if (this.player.score >= 21) {
      this.finish();
    }
  }

  stand() {
    if (this.isfinished) {
      this.showPleaseReset();
    }
    console.log("stand");
    while (this.dealer.score < 17) {
      this.dealer.addCard(this.deck.drawCard());
    }
    this.finish();
  }

  finish() {
    if (this.player.score > 21) {
      console.log("Player busts");
    } else if (this.dealer.score > 21) {
      console.log("Dealer busts");
    } else if (this.player.score > this.dealer.score) {
      console.log("Player wins");
    } else if (this.player.score < this.dealer.score) {
      console.log("Dealer wins");
    } else {
      console.log("It's a tie");}
      this.isfinished=true;
    }

  reset() {
    this.deck = new Deck("./models/cards54.json");
    this.dealer.reset();
    this.player.reset();
  }
  
  showPleaseReset(){
    alert("Please reset the game");
  }
}

export default BlackJack;
