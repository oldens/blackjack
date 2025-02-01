class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
        this.handContainer = this.createHandContainer();
        this.id = this.generateUniqueId();
    }

    generateUniqueId() {
        return 'player' + Symbol().toString().slice(7);
    }

    createHandContainer() {
        const handContainer = document.createElement("div");
        handContainer.classList.add("hand-container");
        handContainer.style.display = "flex";
        handContainer.style.flexDirection = "row";
        handContainer.style.margin = "10px";
        handContainer.id = this.id;
        const userScore = this.createUserScoreElement();
        handContainer.appendChild(userScore);
        return handContainer;
    }

    createUserScoreElement() {
        const userScore = document.createElement("div");
        userScore.id = this.id + "_score";
        userScore.innerHTML = this.name + " Score: " + this.score;
        return userScore;
    }

    addCard(card) {
        this.hand.push(card);
        this.handContainer.appendChild(card.html);
        this.score += card.value;
        card.show();
        this.updateScoreDisplay();
    }

    updateScoreDisplay() {
        const userScore = document.getElementById(this.id + "_score");
        userScore.innerHTML = this.name + " Score: " + this.score;
    }

    reset() {
        this.hand = [];
        this.score = 0;
        this.handContainer.remove();
        this.handContainer = this.createHandContainer();
    }
}

export default Player;
