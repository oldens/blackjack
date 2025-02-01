class BlackJack {
    constructor() {
        this.deck = [];
        this.players = [];
        this.dealer = new Player('Dealer');
        this.deck = new Deck(); }
    startGame() {}

    startGame() {
        this.deck.importFromJSON(deckJson);
        this.deck.shuffle();
        this.players.push(new Player('Player'));
        this.players.push(this.dealer);
        this.dealCards();
        this.showCards();
        this.showButtons();
    }
}