class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
        this.handContainer = this.createHandContainer();
        this.id='player'+Symbol().toString().slice(7);  // Generate a unique id
    }

    createHandContainer() {
        const handContainer = document.createElement("div");
        handContainer.classList.add("hand-container");
        handContainer.id = this.id;
        return handContainer;
    }

    addCard(card) {
        this.hand.push(card);
        this.handContainer.appendChild(card.html);
        this.updateScore();
        card.show();
    }

    updateScore() {
        this.score = this.hand.reduce((acc, card) => acc + card.rank, 0);
    }
}

export default Player;