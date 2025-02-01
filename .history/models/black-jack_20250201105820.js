
class BlackJack {
    constructor() {
        this.deck = new Deck("cards54.json");
        this.players = [];
        this.dealer = new Player('Dealer');
    }

    startGame() {
        this.deck.shuffle();
        this.players.push(new Player('Casino'));   
        this.players.push(new Player('Player'));   
    }
    playerHit() {
        this.players[1].addCard(this.deck.drawCard());
    }
}