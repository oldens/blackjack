
class BlackJack {
    constructor() {
        this.deck = [];
        this.players = [];
        this.dealer = new Player('Dealer');
        this.deck = new Deck(); }
    startGame() {}

    startGame() {
        this.deck= new Deck("cards54.json");
        this.deck.shuffle();

    }
}