
class BlackJack {
    constructor() {
        this.deck = new Deck("cards54.json");
        this.players = [];
        this.dealer = new Player('Dealer');
    startGame() {}

    startGame() {
        this.deck.shuffle();

    }
}