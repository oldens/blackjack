import Deck from './deck.js';
import Player from './player.js';
import Card from './card.js';

class BlackJack {
  constructor() {
    console.log('BlackJack constructor');
    this.deck = new Deck("./models/cards54.json");
    this.dealer = new Player('Dealer');
    this.player = new Player('Player');
    document.body.appendChild(this.player.handContainer);
    document.body.appendChild(this.dealer.handContainer);
  }

  startGame() {
    this.deck.shuffle();
  }

  hit() {
    this.player.addCard(this.deck.drawCard());
  }

  stand() {
    console.log('stand');
    while (this.dealer.score < 17) {
      this.dealer.addCard(this.deck.drawCard());
    }
  }
}

export default BlackJack;