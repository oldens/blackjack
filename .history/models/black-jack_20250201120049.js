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
    console.log(this.deck);
  }

  startGame() {
    this.deck.shuffle();
  }

  hit() {
    console.log('Player hits');
    this.player.addCard(this.deck.drawCard());
  }
}

export default BlackJack;